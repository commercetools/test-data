/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeType, TAttributeTypeGraphql } from './types';
import * as AttributeType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeType, TAttributeType>(
      'default',
      AttributeType.random(),
      expect.objectContaining({
        name: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeType, TAttributeType>(
      'rest',
      AttributeType.random(),
      expect.objectContaining({
        name: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeType, TAttributeTypeGraphql>(
      'graphql',
      AttributeType.random(),
      expect.objectContaining({
        name: expect.any(String),
        __typename: expect.any(String),
      })
    )
  );
});
