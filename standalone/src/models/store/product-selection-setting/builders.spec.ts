/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import type {
  TProductSelectionSettingRest,
  TProductSelectionSettingGraphql,
} from './types';
import {
  ProductSelectionSettingRest,
  ProductSelectionSettingGraphql,
  ProductSelectionSetting,
} from './index';

const validateRestModel = (model: TProductSelectionSettingRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      productSelection: expect.objectContaining({
        typeId: 'product-selection',
        id: expect.any(String),
      }),
      active: expect.any(Boolean),
    })
  );
};

const validateGraphqlModel = (model: TProductSelectionSettingGraphql) => {
  expect(model).toEqual(
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
  );
};

describe('ProductSelectionSetting builder', () => {
  it('builds a Rest model', () => {
    const model = ProductSelectionSettingRest.random().buildRest();
    validateRestModel(model);
  });

  it('builds a Graphql model', () => {
    const model = ProductSelectionSettingGraphql.random().buildGraphql();
    validateGraphqlModel(model);
  });

  describe('ProductSelectionSetting model compatibility builders', () => {
    it('builds a Rest model', () => {
      const model =
        ProductSelectionSetting.random().buildRest<TProductSelectionSettingRest>();
      validateRestModel(model);
    });

    it('builds a Graphql model', () => {
      const model =
        ProductSelectionSetting.random().buildGraphql<TProductSelectionSettingGraphql>();
      validateGraphqlModel(model);
    });
  });
});
