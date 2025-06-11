import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftRest,
  TProductSelectionSettingDraftGraphql,
} from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './default-product-selection';

describe('with defaultProductSelection present', () => {
  it('should return a defaultProductSelection REST preset object', () => {
    const defaultProductSelectionPreset =
      restPreset().build<TProductSelectionSettingDraftRest>();

    expect(defaultProductSelectionPreset).toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "default-product-selection",
          "typeId": "product-selection",
        },
      }
    `);
  });

  it('should return a defaultProductSelection REST preset object from compat preset', () => {
    const defaultProductSelectionPreset =
      compatPreset().build<TProductSelectionSettingDraft>();

    expect(defaultProductSelectionPreset).toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "default-product-selection",
          "typeId": "product-selection",
        },
      }
    `);
  });

  it('should return a defaultProductSelection GraphQL preset object', () => {
    const defaultProductSelectionPresetGraphql =
      graphqlPreset().buildRest<TProductSelectionSettingDraftGraphql>();

    expect(defaultProductSelectionPresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "default-product-selection",
          "typeId": "product-selection",
        },
      }
    `);
  });

  it('should return a defaultProductSelection GraphQL preset object from compat preset', () => {
    const defaultProductSelectionPresetGraphql =
      compatPreset().buildGraphql<TProductSelectionSettingDraft>();

    expect(defaultProductSelectionPresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "productSelection": {
          "key": "default-product-selection",
          "typeId": "product-selection",
        },
      }
    `);
  });
});
