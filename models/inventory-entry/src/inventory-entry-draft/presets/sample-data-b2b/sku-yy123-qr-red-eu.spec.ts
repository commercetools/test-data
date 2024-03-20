import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrRedEu from './sku-yy123-qr-red-eu';

describe(`with skuYy123QrRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuYy123QrRedEu preset`, () => {
    const skuYy123QrRedEuPreset =
      skuYy123QrRedEu().build<TInventoryEntryDraft>();
    expect(skuYy123QrRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrRedEu preset when built for graphql`, () => {
    const skuYy123QrRedEuPresetGraphql =
      skuYy123QrRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
