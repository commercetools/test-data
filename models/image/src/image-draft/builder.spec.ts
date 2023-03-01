/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TImageDraftGraphql, TImageDraft } from '../types';
import * as ImageDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TImageDraft, TImageDraftGraphql>(
      'graphql',
      ImageDraft.random(),
      expect.objectContaining({
        label: expect.any(String),
        url: expect.any(String),
        dimensions: expect.objectContaining({
          w: expect.any(Number),
          h: expect.any(Number),
          __typename: 'DimensionsInput',
        }),
        __typename: 'ImageInput',
      })
    )
  );
});
