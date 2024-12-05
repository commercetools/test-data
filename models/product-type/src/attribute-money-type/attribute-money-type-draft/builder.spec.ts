/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeMoneyType,
  TAttributeMoneyTypeDraft,
  TAttributeMoneyTypeDraftGraphql,
} from '../types';
import * as AttributeMoneyTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeMoneyType, TAttributeMoneyTypeDraft>(
      'default',
      AttributeMoneyTypeDraft.random(),
      expect.objectContaining({
        name: 'money',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeMoneyType, TAttributeMoneyTypeDraftGraphql>(
      'graphql',
      AttributeMoneyTypeDraft.random(),
      expect.objectContaining({
        money: {
          dummy: null,
        },
      })
    )
  );
});
