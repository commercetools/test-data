import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrRedUs from './sku-yy123-qr-red-us';

describe(`with skuYy123QrRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuYy123QrRedUs preset`, () => {
    const skuYy123QrRedUsPreset =
      skuYy123QrRedUs().build<TInventoryEntryDraft>();
    expect(skuYy123QrRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrRedUs preset when built for graphql`, () => {
    const skuYy123QrRedUsPresetGraphql =
      skuYy123QrRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
