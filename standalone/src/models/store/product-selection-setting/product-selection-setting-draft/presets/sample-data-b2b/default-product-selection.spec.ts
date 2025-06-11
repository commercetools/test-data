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
  it('should return a defaultProductSelection preset for rest', () => {
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

  it('should return a defaultProductSelection preset', () => {
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

  it('should return a defaultProductSelection preset for graphql', () => {
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

  it('should return a defaultProductSelection compatibility preset when built for graphql', () => {
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
