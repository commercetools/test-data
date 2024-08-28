/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAttributeSetTypeGraphql , type TAttributeSetType } from './types';
import * as AttributeSetType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeSetType, TAttributeSetType>(
      'default',
      AttributeSetType.random(),
      expect.objectContaining({
        name: 'set',
        elementType: {
          name: 'boolean',
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeSetType, TAttributeSetType>(
      'rest',
      AttributeSetType.random(),
      expect.objectContaining({
        name: 'set',
        elementType: {
          name: 'boolean',
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeSetType, TAttributeSetTypeGraphql>(
      'graphql',
      AttributeSetType.random(),
      expect.objectContaining({
        name: 'set',
        elementType: {
          name: 'boolean',
          __typename: 'BooleanAttributeDefinitionType',
        },
        __typename: 'SetAttributeDefinitionType',
      })
    )
  );
});
