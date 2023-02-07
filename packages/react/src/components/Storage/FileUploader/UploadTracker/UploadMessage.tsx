import React from 'react';
import { Text, ComponentClassNames } from '../../../../primitives';
import { IconCheck, IconError } from '../../../../primitives/Icon/internal';
import { FileStateProps } from '../types';
import classNames from 'classnames';
import { classNameModifier } from '../../../../primitives/shared/utils';

export const UploadMessage = ({
  fileState,
  errorMessage,
  percentage,
  strings,
}: FileStateProps): JSX.Element => {
  switch (fileState) {
    case 'loading': {
      return (
        <Text className={ComponentClassNames.FileUploaderFileStatus}>
          {strings.uploading(percentage)}
        </Text>
      );
    }
    case 'paused':
      return (
        <Text className={ComponentClassNames.FileUploaderFileStatus}>
          {strings.paused(percentage)}
        </Text>
      );
    case 'success':
      return (
        <Text
          className={classNames(
            ComponentClassNames.FileUploaderFileStatus,
            classNameModifier(
              ComponentClassNames.FileUploaderFileStatus,
              'success'
            )
          )}
        >
          <IconCheck fontSize="xl" /> {strings.uploadSuccessful}
        </Text>
      );
    case 'error':
      return (
        <Text
          className={classNames(
            ComponentClassNames.FileUploaderFileStatus,
            classNameModifier(
              ComponentClassNames.FileUploaderFileStatus,
              'error'
            )
          )}
        >
          <IconError fontSize="xl" /> {errorMessage}
        </Text>
      );
    default:
      return null;
  }
};
