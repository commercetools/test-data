import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrRedUs from './sku-eee123-qr-red-us';

describe(`with skuEee123QrRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuEee123QrRedUs preset`, () => {
    const skuEee123QrRedUsPreset =
      skuEee123QrRedUs().build<TInventoryEntryDraft>();
    expect(skuEee123QrRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrRedUs preset when built for graphql`, () => {
    const skuEee123QrRedUsPresetGraphql =
      skuEee123QrRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
