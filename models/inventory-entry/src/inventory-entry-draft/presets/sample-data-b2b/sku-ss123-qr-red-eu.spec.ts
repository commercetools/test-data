import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrRedEu from './sku-ss123-qr-red-eu';

describe(`with skuSs123QrRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuSs123QrRedEu preset`, () => {
    const skuSs123QrRedEuPreset =
      skuSs123QrRedEu().build<TInventoryEntryDraft>();
    expect(skuSs123QrRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrRedEu preset when built for graphql`, () => {
    const skuSs123QrRedEuPresetGraphql =
      skuSs123QrRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
