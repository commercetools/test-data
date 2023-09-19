/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeBooleanType, TAttributeBooleanTypeGraphql } from './types';
import * as AttributeBooleanType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeBooleanType, TAttributeBooleanType>(
      'default',
      AttributeBooleanType.random(),
      expect.objectContaining({
        name: 'boolean',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeBooleanType, TAttributeBooleanType>(
      'rest',
      AttributeBooleanType.random(),
      expect.objectContaining({
        name: 'boolean',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeBooleanType, TAttributeBooleanTypeGraphql>(
      'graphql',
      AttributeBooleanType.random(),
      expect.objectContaining({
        name: 'boolean',
        __typename: 'BooleanAttributeDefinitionType',
      })
    )
  );
});
