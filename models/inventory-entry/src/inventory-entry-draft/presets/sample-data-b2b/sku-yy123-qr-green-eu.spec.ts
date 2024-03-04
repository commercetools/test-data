import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrGreenEu from './sku-yy123-qr-green-eu';

describe(`with skuYy123QrGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuYy123QrGreenEu preset`, () => {
    const skuYy123QrGreenEuPreset =
      skuYy123QrGreenEu().build<TInventoryEntryDraft>();
    expect(skuYy123QrGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuYy123QrGreenEu preset when built for graphql`, () => {
    const skuYy123QrGreenEuPresetGraphql =
      skuYy123QrGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
