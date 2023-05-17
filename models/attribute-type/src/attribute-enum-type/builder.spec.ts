/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeEnumType, TAttributeEnumTypeGraphql } from './types';
import * as AttributeType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumType>(
      'default',
      AttributeType.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumType>(
      'rest',
      AttributeType.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeGraphql>(
      'graphql',
      AttributeType.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
        __typename: 'AttributeEnumDefinitionType',
      })
    )
  );
});
