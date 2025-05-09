/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type { TImage, TImageGraphql } from './types';
import * as Image from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TImage, TImage>(
      'default',
      Image.random(),
      expect.objectContaining({
        label: expect.any(String),
        url: expect.any(String),
        dimensions: expect.objectContaining({
          w: expect.any(Number),
          h: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TImage, TImage>(
      'rest',
      Image.random(),
      expect.objectContaining({
        label: expect.any(String),
        url: expect.any(String),
        dimensions: expect.objectContaining({
          w: expect.any(Number),
          h: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TImage, TImageGraphql>(
      'graphql',
      Image.random(),
      expect.objectContaining({
        label: expect.any(String),
        url: expect.any(String),
        dimensions: expect.objectContaining({
          width: expect.any(Number),
          height: expect.any(Number),
        }),
        __typename: 'Image',
      })
    )
  );
});
