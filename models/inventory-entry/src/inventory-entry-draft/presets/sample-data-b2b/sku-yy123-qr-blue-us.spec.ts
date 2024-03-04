import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrBlueUs from './sku-yy123-qr-blue-us';

describe(`with skuYy123QrBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuYy123QrBlueUs preset`, () => {
    const skuYy123QrBlueUsPreset =
      skuYy123QrBlueUs().build<TInventoryEntryDraft>();
    expect(skuYy123QrBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuYy123QrBlueUs preset when built for graphql`, () => {
    const skuYy123QrBlueUsPresetGraphql =
      skuYy123QrBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
