/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import type {
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../types';
import {
  ProductSelectionSettingDraft,
  ProductSelectionSettingDraftRest,
  ProductSelectionSettingDraftGraphql,
} from './index';

const validateModel = (
  model:
    | TProductSelectionSettingDraftRest
    | TProductSelectionSettingDraftGraphql
) => {
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

describe('ProductSelectionSettingDraft builder', () => {
  it('builds a Rest model', () => {
    const model = ProductSelectionSettingDraftRest.random().buildRest();
    validateModel(model);
  });

  it('builds a Graphql model', () => {
    const model = ProductSelectionSettingDraftGraphql.random().buildGraphql();
    validateModel(model);
  });

  describe('ProductSelectionSettingDraft model compatibility builders', () => {
    it('builds a Rest model', () => {
      const model =
        ProductSelectionSettingDraft.random().buildRest<TProductSelectionSettingDraftRest>();
      validateModel(model);
    });

    it('builds a Graphql model', () => {
      const model =
        ProductSelectionSettingDraft.random().buildGraphql<TProductSelectionSettingDraftGraphql>();
      validateModel(model);
    });
  });
});
