/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeMoneyType, TAttributeMoneyTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeMoneyType, TAttributeMoneyType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'money',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeMoneyType, TAttributeMoneyType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'money',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeMoneyType, TAttributeMoneyTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'money',
        __typename: 'MoneyAttributeDefinitionType',
      })
    )
  );
});
