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
  it('should return a usMediumCustomersCatalogProductSelection preset for rest', () => {
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

  it('should return a usMediumCustomersCatalogProductSelection preset for graphql', () => {
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
  it('should return a usMediumCustomersCatalogProductSelection compatibility preset when built for rest', () => {
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
  it('should return a usMediumCustomersCatalogProductSelection compatibility preset when built for graphql', () => {
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
