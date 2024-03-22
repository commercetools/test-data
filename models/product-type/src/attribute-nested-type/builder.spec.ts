/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeNestedType, TAttributeNestedTypeGraphql } from './types';
import * as AttributePlainEnumValue from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeNestedType, TAttributeNestedType>(
      'default',
      AttributePlainEnumValue.random(),
      expect.objectContaining({
        name: 'nested',
        typeRef: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeNestedType, TAttributeNestedType>(
      'rest',
      AttributePlainEnumValue.random(),
      expect.objectContaining({
        name: 'nested',
        typeRef: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeNestedType, TAttributeNestedTypeGraphql>(
      'graphql',
      AttributePlainEnumValue.random(),
      expect.objectContaining({
        __typename: 'NestedAttributeDefinitionType',
        name: 'nested',
        typeRef: null,
      })
    )
  );
});
