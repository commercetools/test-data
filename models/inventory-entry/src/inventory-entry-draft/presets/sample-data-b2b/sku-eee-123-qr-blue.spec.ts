import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrBlue from './sku-eee-123-qr-blue';

describe(`with skuEee123QrBlue preset`, () => {
  it(`should return a skuEee123QrBlue preset`, () => {
    const skuEee123QrBluePreset =
      skuEee123QrBlue().build<TInventoryEntryDraft>();
    expect(skuEee123QrBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrBlue preset when built for graphql`, () => {
    const skuEee123QrBluePresetGraphql =
      skuEee123QrBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
