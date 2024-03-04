import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrGreenUs from './sku-ss123-qr-green-us';

describe(`with skuSs123QrGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuSs123QrGreenUs preset`, () => {
    const skuSs123QrGreenUsPreset =
      skuSs123QrGreenUs().build<TInventoryEntryDraft>();
    expect(skuSs123QrGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrGreenUs preset when built for graphql`, () => {
    const skuSs123QrGreenUsPresetGraphql =
      skuSs123QrGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
