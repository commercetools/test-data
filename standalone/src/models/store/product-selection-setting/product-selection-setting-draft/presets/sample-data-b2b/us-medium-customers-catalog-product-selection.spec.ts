import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './us-medium-customers-catalog-product-selection';

describe('with usMediumCustomersCatalogProductSelection present', () => {
  it('should return a usMediumCustomersCatalogProductSelection REST preset object', () => {
    const usMediumCustomersCatalogProductSelectionPresetRest =
      restPreset().build<TProductSelectionSettingDraftRest>();

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

  it('should return a usMediumCustomersCatalogProductSelection GraphQL preset object', () => {
    const usMediumCustomersCatalogProductSelectionPresetGraphql =
      graphqlPreset().build<TProductSelectionSettingDraftGraphql>();

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
  it('should return a usMediumCustomersCatalogProductSelection REST preset object from compat preset', () => {
    const usMediumCustomersCatalogProductSelectionPreset =
      compatPreset().buildRest<TProductSelectionSettingDraft>();

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
  it('should return a usMediumCustomersCatalogProductSelection GraphQL preset object from compat preset', () => {
    const usMediumCustomersCatalogProductSelectionPresetGraphql =
      compatPreset().buildGraphql<TProductSelectionSettingDraft>();

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
