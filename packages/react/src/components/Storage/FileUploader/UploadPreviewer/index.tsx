import React from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { PreviewerProps } from '../types';
import {
  Alert,
  Button,
  ComponentClassNames,
  Loader,
  Text,
  View,
} from '../../../../primitives';

export function UploadPreviewer({
  aggregatePercentage,
  children,
  dropZone,
  fileStatuses,
  isLoading,
  isSuccessful,
  hasMaxFilesError,
  maxFileCount,
  onClear,
  onFileClick,
  strings,
}: PreviewerProps): JSX.Element {
  const headingMaxFiles = strings.maxFilesError(maxFileCount);
  const getUploadedFilesLength = () =>
    fileStatuses.filter((file) => file?.fileState === 'success').length;

  const remainingFilesLength = fileStatuses.length - getUploadedFilesLength();
  const remainingFilesText = strings.remainingFiles(remainingFilesLength);
  const uploadedFilesText = strings.filesUploaded(getUploadedFilesLength());

  const isDisabled =
    fileStatuses.some((status) =>
      ['error', 'editing'].includes(status?.fileState)
    ) ||
    remainingFilesLength === 0 ||
    hasMaxFilesError;

  return (
    <View className={ComponentClassNames.FileUploaderPreviewer}>
      <View className={ComponentClassNames.FileUploaderPreviewerBody}>
        {dropZone}
        <Text className={ComponentClassNames.FileUploaderPreviewerText}>
          {isSuccessful ? uploadedFilesText : remainingFilesText}
        </Text>
        {children}
      </View>

      <View className={ComponentClassNames.FileUploaderPreviewerFooter}>
        <View>
          {isLoading && (
            <>
              <Text>{strings.uploading(aggregatePercentage)}</Text>
              <Loader
                className={ComponentClassNames.FileUploaderLoader}
                variation="linear"
                percentage={aggregatePercentage}
                isPercentageTextHidden
                isDeterminate
              />
            </>
          )}
        </View>

        <View className={ComponentClassName.FileUploaderPreviewerFooterActions}>
          {!isLoading && !isSuccessful && (
            <>
              <Button size="small" variation="link" onClick={onClear}>
                {strings.clearButton}
              </Button>
              <Button
                disabled={isDisabled}
                size="small"
                variation="primary"
                onClick={onFileClick}
              >
                {strings.uploadButton(remainingFilesLength)}
              </Button>
            </>
          )}
          {isSuccessful && (
            <Button size="small" onClick={onClear}>
              {strings.doneButton}
            </Button>
          )}
        </View>
      </View>

      {hasMaxFilesError && (
        <Alert variation="error" heading={headingMaxFiles} />
      )}
    </View>
  );
}
