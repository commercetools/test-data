import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrBlueEu from './sku-eee123-qr-blue-eu';

describe(`with skuEee123QrBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuEee123QrBlueEu preset`, () => {
    const skuEee123QrBlueEuPreset =
      skuEee123QrBlueEu().build<TInventoryEntryDraft>();
    expect(skuEee123QrBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrBlueEu preset when built for graphql`, () => {
    const skuEee123QrBlueEuPresetGraphql =
      skuEee123QrBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
