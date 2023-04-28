/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TImage, TImageGraphql } from './types';
import * as Image from '.';

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
          w: expect.any(Number),
          h: expect.any(Number),
        }),
        __typename: 'Image',
      })
    )
  );
});
