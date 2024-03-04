import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2015Us from './sku-g123-qr-2015-us';

describe(`with skuG123Qr2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuG123Qr2015Us preset`, () => {
    const skuG123Qr2015UsPreset =
      skuG123Qr2015Us().build<TInventoryEntryDraft>();
    expect(skuG123Qr2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2015Us preset when built for graphql`, () => {
    const skuG123Qr2015UsPresetGraphql =
      skuG123Qr2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
