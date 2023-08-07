/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TProductSelectionSetting,
  TProductSelectionSettingRest,
  TProductSelectionSettingGraphql,
} from './types';
import * as ProductSelectionSetting from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductSelectionSetting, TProductSelectionSetting>(
      'default',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        productSelection: expect.objectContaining({
          typeId: 'product-selection',
          id: expect.any(String),
        }),
        active: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductSelectionSetting,
      TProductSelectionSettingRest
    >(
      'rest',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        productSelection: expect.objectContaining({
          typeId: 'product-selection',
          id: expect.any(String),
        }),
        active: expect.any(Boolean),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProductSelectionSetting,
      TProductSelectionSettingGraphql
    >(
      'graphql',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        __typename: 'ProductSelectionSetting',
        active: expect.any(Boolean),
        productSelectionRef: expect.any(Object),
        productSelection: expect.objectContaining({
          __typename: 'ProductSelection',
          id: expect.any(String),
          version: expect.any(Number),
          key: expect.any(String),
          //TODO: should this be nameAllLocales like in the ProductSelection transformer?
          name: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'LocalizedString',
            }),
          ]),
          productCount: expect.any(Number),
          //TODO: should productRef be pulled in like in the ProductSelectionGraphQL transformer?
          // productRef: null,
          //TODO: where is mode???
          // mode: expect.any(String),
          custom: null,
          createdAt: expect.any(String),
          createdBy: expect.objectContaining({
            customerRef: expect.objectContaining({ typeId: 'customer' }),
            userRef: expect.objectContaining({ typeId: 'user' }),
          }),
          lastModifiedAt: expect.any(String),
          lastModifiedBy: expect.objectContaining({
            customerRef: expect.objectContaining({ typeId: 'customer' }),
            userRef: expect.objectContaining({ typeId: 'user' }),
          }),
        }),
      })
    )
  );
});
