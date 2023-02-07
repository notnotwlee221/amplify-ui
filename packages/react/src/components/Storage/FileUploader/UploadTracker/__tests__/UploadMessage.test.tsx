import * as React from 'react';
import { render } from '@testing-library/react';

import { UploadMessage } from '../UploadMessage';
import { fileUploaderStrings } from '../../strings';

describe('UploadMessage', () => {
  it('exists', async () => {
    const { container } = render(
      <UploadMessage
        strings={fileUploaderStrings}
        fileState="error"
        errorMessage={''}
      />
    );

    expect(container).toMatchSnapshot();
  });
  it('displays loading message if fileState is loading', async () => {
    const { findByText } = render(
      <UploadMessage
        strings={fileUploaderStrings}
        fileState={'loading'}
        percentage={10}
        errorMessage={''}
      />
    );

    expect(await findByText('Uploading: 10%')).toBeVisible();
  });
  it('displays paused message if fileState is paused', async () => {
    const { findByText } = render(
      <UploadMessage
        strings={fileUploaderStrings}
        fileState={'paused'}
        percentage={10}
        errorMessage={''}
      />
    );

    expect(await findByText('Paused: 10%')).toBeVisible();
  });
  it('displays upload success message if fileState is in success', async () => {
    const { findByText } = render(
      <UploadMessage
        strings={fileUploaderStrings}
        fileState={'success'}
        errorMessage={''}
      />
    );

    expect(await findByText('Uploaded successfully')).toBeVisible();
  });
  it('displays error message if fileState is in error', async () => {
    const error = 'error message';
    const { findByText } = render(
      <UploadMessage
        strings={fileUploaderStrings}
        fileState={'error'}
        errorMessage={error}
      />
    );

    expect(await findByText(error)).toBeVisible();
  });
});
