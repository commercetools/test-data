/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type {
  TProductSelectionSetting,
  TProductSelectionSettingRest,
  TProductSelectionSettingGraphql,
} from './types';
import {
  ProductSelectionSettingRest,
  ProductSelectionSettingGraphql,
  ProductSelectionSetting,
} from './index';

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
      TProductSelectionSettingRest,
      TProductSelectionSettingRest
    >(
      'rest',
      ProductSelectionSettingRest.random(),
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
      TProductSelectionSettingGraphql,
      TProductSelectionSettingGraphql
    >(
      'graphql',
      ProductSelectionSettingGraphql.random(),
      expect.objectContaining({
        __typename: 'ProductSelectionSetting',
        active: expect.any(Boolean),
        productSelectionRef: expect.any(Object),
        productSelection: expect.objectContaining({
          __typename: 'ProductSelection',
          id: expect.any(String),
          version: expect.any(Number),
          key: expect.any(String),
          nameAllLocales: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'LocalizedString',
            }),
          ]),
          productCount: expect.any(Number),
          productRefs: expect.objectContaining({
            __typename: 'SelectionOfProductQueryResult',
            results: expect.arrayContaining([
              expect.objectContaining({
                __typename: 'ProductOfSelection',
              }),
            ]),
          }),
          mode: expect.any(String),
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
