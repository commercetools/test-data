import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../../../types';
import {
  usMediumCustomersCatalogPreset,
  usMediumCustomersCatalogGraphql,
  usMediumCustomersCatalogRest,
} from './us-medium-customers-catalog-product-selection';

describe('with usMediumCustomersCatalogProductSelection present', () => {
  it('should return a usMediumCustomersCatalogProductSelection preset for rest', () => {
    const usMediumCustomersCatalogProductSelectionPresetRest =
      usMediumCustomersCatalogRest().buildRest<TProductSelectionSettingDraftRest>();

    expect(usMediumCustomersCatalogProductSelectionPresetRest)
      .toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "us-medium-customers-catalog",
          "typeId": "product-selection",
        },
      }
      `);
  });

  it('should return a usMediumCustomersCatalogProductSelection preset for graphql', () => {
    const usMediumCustomersCatalogProductSelectionPresetGraphql =
      usMediumCustomersCatalogGraphql().buildGraphql<TProductSelectionSettingDraftGraphql>();

    expect(usMediumCustomersCatalogProductSelectionPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "us-medium-customers-catalog",
          "typeId": "product-selection",
        },
      }
      `);
  });
  it('should return a usMediumCustomersCatalogProductSelection preset', () => {
    const usMediumCustomersCatalogProductSelectionPreset =
      usMediumCustomersCatalogPreset().build<TProductSelectionSettingDraft>();

    expect(usMediumCustomersCatalogProductSelectionPreset)
      .toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "us-medium-customers-catalog",
          "typeId": "product-selection",
        },
      }
    `);
  });
  it('should return a usMediumCustomersCatalogProductSelection preset when built for graphql', () => {
    const usMediumCustomersCatalogProductSelectionPresetGraphql =
      usMediumCustomersCatalogPreset().buildGraphql<TProductSelectionSettingDraft>();

    expect(usMediumCustomersCatalogProductSelectionPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "us-medium-customers-catalog",
          "typeId": "product-selection",
        },
      }
    `);
  });
});
