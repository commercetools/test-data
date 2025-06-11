import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftRest,
  TProductSelectionSettingDraftGraphql,
} from '../../../types';
import {
  defaultProductSelection,
  defaultProductSelectionRest,
  defaultProductSelectionGraphql,
} from './default-product-selection';

describe('with defaultProductSelection present', () => {
  it('should return a defaultProductSelection preset for rest', () => {
    const defaultProductSelectionPreset =
      defaultProductSelectionRest().buildRest<TProductSelectionSettingDraftRest>();

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
      defaultProductSelection().build<TProductSelectionSettingDraft>();

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
      defaultProductSelectionGraphql().buildGraphql<TProductSelectionSettingDraftGraphql>();

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
      defaultProductSelection().buildGraphql<TProductSelectionSettingDraft>();

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
