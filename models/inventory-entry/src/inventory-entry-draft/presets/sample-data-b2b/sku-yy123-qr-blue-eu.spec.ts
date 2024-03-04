import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrBlueEu from './sku-yy123-qr-blue-eu';

describe(`with skuYy123QrBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuYy123QrBlueEu preset`, () => {
    const skuYy123QrBlueEuPreset =
      skuYy123QrBlueEu().build<TInventoryEntryDraft>();
    expect(skuYy123QrBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrBlueEu preset when built for graphql`, () => {
    const skuYy123QrBlueEuPresetGraphql =
      skuYy123QrBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
