import { FileUploader } from '@aws-amplify/ui-react';

export const MaxFileSizeExample = () => {
  return (
    <FileUploader
      maxFileSize={100000}
      variation="drop"
      acceptedFileTypes={['image/*']}
      accessLevel="public"
      // @ts-ignore // IGNORE
      provider="fast" // IGNORE
    />
  );
};
