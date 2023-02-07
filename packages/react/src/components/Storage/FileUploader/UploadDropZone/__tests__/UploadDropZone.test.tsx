import * as React from 'react';
import { render } from '@testing-library/react';

import { UploadDropZone } from '..';
import { classNameModifier } from '../../../../../primitives/shared/utils';
import { ComponentClassNames } from '../../../../../primitives';
import { fileUploaderStrings } from '../../strings';

describe('UploaderDrop', () => {
  it('exists', () => {
    const { container } = render(
      <UploadDropZone
        inDropZone={false}
        onDragEnter={() => ''}
        onDragLeave={() => ''}
        onDragOver={() => ''}
        onDragStart={() => ''}
        onDrop={() => ''}
        strings={fileUploaderStrings}
      />
    );

    expect(container).toMatchSnapshot();
  });
  it('shows correct class when inDropZone is true', () => {
    const { container } = render(
      <UploadDropZone
        inDropZone
        onDragEnter={() => ''}
        onDragLeave={() => ''}
        onDragOver={() => ''}
        onDragStart={() => ''}
        onDrop={() => ''}
        strings={fileUploaderStrings}
      />
    );
    const activeClass = container.getElementsByClassName(
      classNameModifier(ComponentClassNames.FileUploaderDropZone, 'active')
    )[0];

    expect(activeClass).toBeVisible();
  });
});
