import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrGreenEu from './sku-ss123-qr-green-eu';

describe(`with skuSs123QrGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuSs123QrGreenEu preset`, () => {
    const skuSs123QrGreenEuPreset =
      skuSs123QrGreenEu().build<TInventoryEntryDraft>();
    expect(skuSs123QrGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuSs123QrGreenEu preset when built for graphql`, () => {
    const skuSs123QrGreenEuPresetGraphql =
      skuSs123QrGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
