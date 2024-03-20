import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrGreenUs from './sku-yy123-qr-green-us';

describe(`with skuYy123QrGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuYy123QrGreenUs preset`, () => {
    const skuYy123QrGreenUsPreset =
      skuYy123QrGreenUs().build<TInventoryEntryDraft>();
    expect(skuYy123QrGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrGreenUs preset when built for graphql`, () => {
    const skuYy123QrGreenUsPresetGraphql =
      skuYy123QrGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
