import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrBlueUs from './sku-ss123-qr-blue-us';

describe(`with skuSs123QrBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuSs123QrBlueUs preset`, () => {
    const skuSs123QrBlueUsPreset =
      skuSs123QrBlueUs().build<TInventoryEntryDraft>();
    expect(skuSs123QrBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrBlueUs preset when built for graphql`, () => {
    const skuSs123QrBlueUsPresetGraphql =
      skuSs123QrBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
