/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TAttributeNumberType, TAttributeNumberTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeNumberType, TAttributeNumberType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'number',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeNumberType, TAttributeNumberType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'number',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeNumberType, TAttributeNumberTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'number',
        __typename: 'NumberAttributeDefinitionType',
      })
    )
  );
});
