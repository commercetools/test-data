/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeDraft, TAttributeDraftGraphql } from '../types';
import * as AttributeDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraft>(
      'default',
      AttributeDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraft>(
      'rest',
      AttributeDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraftGraphql>(
      'graphql',
      AttributeDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
        __typename: 'ProductAttributeInput',
      })
    )
  );
});
