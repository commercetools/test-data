/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TCustomFieldMoneyType, TCustomFieldMoneyTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldMoneyType, TCustomFieldMoneyType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Money',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldMoneyType, TCustomFieldMoneyType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Money',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldMoneyType, TCustomFieldMoneyTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Money',
        __typename: 'MoneyType',
      })
    )
  );
});
