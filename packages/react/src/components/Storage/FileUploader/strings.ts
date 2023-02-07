import { FileUploaderStrings } from './types';

export const fileUploaderStrings: FileUploaderStrings = {
  filesUploaded(count) {
    return `${count} ${count === 1 ? 'file uploaded' : 'files uploaded'}`;
  },
  remainingFiles(count) {
    return `${count} ${count === 1 ? 'file' : 'files'} selected`;
  },
  uploading(percentage) {
    return `Uploading${percentage > 0 ? `: ${percentage}%` : ''}`;
  },
  uploadButton(count) {
    return `Upload ${count} ${count === 1 ? 'file' : 'files'}`;
  },
  maxFilesError(count) {
    return `Cannot choose more than ${count}`;
  },
  error(message) {
    return message;
  },
  doneButton: 'Done',
  clearButton: 'Clear all',
  extensionNotAllowed: 'Extension not allowed',
  browseFiles: 'Browse files',
  dropFiles: 'Drop files here or',
  pause: 'Pause',
  resume: 'Resume',
  uploadSuccessful: 'Uploaded successfully',
  paused(percentage) {
    return `Paused: ${percentage}%`;
  },
};
