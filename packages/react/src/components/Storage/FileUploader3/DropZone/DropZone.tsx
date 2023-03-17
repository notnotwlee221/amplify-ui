import React, { useState } from 'react';
import classNames from 'classnames';

import { View, ComponentClassNames, Text } from '../../../../primitives';
import { classNameModifier } from '../../../../primitives/shared/utils';
import { IconUpload } from '../../../../primitives/Icon/internal';
import { DropZoneProps } from './types';
import { FilePicker } from './FilePicker';

export function DropZone({
  onChange,
  isLoading = false,
  dropFilesText,
  browseFilesText,
}: DropZoneProps): JSX.Element {
  const [inDropZone, setInDropZone] = useState(false);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.clearData();
  };
  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isLoading) {
      return false;
    }
    setInDropZone(false);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isLoading) {
      return false;
    }
    setInDropZone(true);
    event.dataTransfer.dropEffect = 'copy';
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isLoading) return false;
    onChange(event);
    setInDropZone(false);
  };

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
        {dropFilesText}
      </Text>
      <FilePicker onFileChange={onChange} browseFilesText={browseFilesText} />
    </View>
  );
}
