import type { TProductSelectionSettingDraft } from '../../../types';
import usMediumCustomersCatalogProductSelection from './us-medium-customers-catalog-product-selection';

describe('with usMediumCustomersCatalogProductSelection present', () => {
  it('should return a usMediumCustomersCatalogProductSelection preset', () => {
    const usMediumCustomersCatalogProductSelectionPreset =
      usMediumCustomersCatalogProductSelection().build<TProductSelectionSettingDraft>();

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
      usMediumCustomersCatalogProductSelection().buildGraphql<TProductSelectionSettingDraft>();

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
