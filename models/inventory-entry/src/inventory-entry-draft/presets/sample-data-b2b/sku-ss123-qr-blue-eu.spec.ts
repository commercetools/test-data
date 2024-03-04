import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrBlueEu from './sku-ss123-qr-blue-eu';

describe(`with skuSs123QrBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuSs123QrBlueEu preset`, () => {
    const skuSs123QrBlueEuPreset =
      skuSs123QrBlueEu().build<TInventoryEntryDraft>();
    expect(skuSs123QrBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuSs123QrBlueEu preset when built for graphql`, () => {
    const skuSs123QrBlueEuPresetGraphql =
      skuSs123QrBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
