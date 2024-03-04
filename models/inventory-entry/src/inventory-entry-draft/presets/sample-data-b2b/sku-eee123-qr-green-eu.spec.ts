import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrGreenEu from './sku-eee123-qr-green-eu';

describe(`with skuEee123QrGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuEee123QrGreenEu preset`, () => {
    const skuEee123QrGreenEuPreset =
      skuEee123QrGreenEu().build<TInventoryEntryDraft>();
    expect(skuEee123QrGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrGreenEu preset when built for graphql`, () => {
    const skuEee123QrGreenEuPresetGraphql =
      skuEee123QrGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
