import type { TProductSelectionSettingDraft } from '../../../types';
import defaultProductSelection from './default-product-selection';

describe('with defaultProductSelection present', () => {
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
  it('should return a defaultProductSelection preset when built for graphql', () => {
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
