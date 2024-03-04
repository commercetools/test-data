import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrRedUs from './sku-ss123-qr-red-us';

describe(`with skuSs123QrRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuSs123QrRedUs preset`, () => {
    const skuSs123QrRedUsPreset =
      skuSs123QrRedUs().build<TInventoryEntryDraft>();
    expect(skuSs123QrRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrRedUs preset when built for graphql`, () => {
    const skuSs123QrRedUsPresetGraphql =
      skuSs123QrRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
