import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrRedEu from './sku-eee123-qr-red-eu';

describe(`with skuEee123QrRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuEee123QrRedEu preset`, () => {
    const skuEee123QrRedEuPreset =
      skuEee123QrRedEu().build<TInventoryEntryDraft>();
    expect(skuEee123QrRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrRedEu preset when built for graphql`, () => {
    const skuEee123QrRedEuPresetGraphql =
      skuEee123QrRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
