import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrBlue from './sku-yy-123-qr-blue';

describe(`with skuYy123QrBlue preset`, () => {
  it(`should return a skuYy123QrBlue preset`, () => {
    const skuYy123QrBluePreset = skuYy123QrBlue().build<TInventoryEntryDraft>();
    expect(skuYy123QrBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuYy123QrBlue preset when built for graphql`, () => {
    const skuYy123QrBluePresetGraphql =
      skuYy123QrBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
