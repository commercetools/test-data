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
          id: expect.any(String),
          version: expect.any(Number),
          key: expect.any(String),
          name: expect.any(Object),
          productCount: expect.any(Number),
          mode: expect.any(String),
          custom: null,
          createdAt: expect.any(String),
          createdBy: expect.objectContaining({
            customer: expect.objectContaining({ typeId: 'customer' }),
          }),
          lastModifiedAt: expect.any(String),
          lastModifiedBy: expect.objectContaining({
            customer: expect.objectContaining({ typeId: 'customer' }),
          }),
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
          nameAllLocales: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'LocalizedString',
            }),
          ]),
          productCount: expect.any(Number),
          productRefs: null,
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
