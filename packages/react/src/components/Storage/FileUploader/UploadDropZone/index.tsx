import React from 'react';
import classNames from 'classnames';
import { UploadDropZoneProps } from '../types';
import { View, ComponentClassNames, Text } from '../../../../primitives';
import { classNameModifier } from '../../../../primitives/shared/utils';
import { IconUpload } from '../../../../primitives/Icon/internal';

export function UploadDropZone({
  children,
  inDropZone,
  onDragStart,
  onDragEnter,
  onDragLeave,
  onDrop,
  onDragOver,
  strings,
}: UploadDropZoneProps): JSX.Element {
  return (
    <View
      className={classNames(
        inDropZone &&
          classNameModifier(ComponentClassNames.FileUploaderDropZone, 'active'),
        ComponentClassNames.FileUploaderDropZone
      )}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <IconUpload
        aria-hidden
        className={ComponentClassNames.FileUploaderDropZoneIcon}
      />
      <Text className={ComponentClassNames.FileUploaderDropZoneText}>
        {strings.dropFiles}
      </Text>
      {children}
    </View>
  );
}
