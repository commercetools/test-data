import type { TProductSelectionSettingDraft } from '../../../types';
import { compatPreset } from './default-product-selection';

describe('with defaultProductSelection present', () => {
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
  it('should return a defaultProductSelection preset when built for graphql', () => {
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
