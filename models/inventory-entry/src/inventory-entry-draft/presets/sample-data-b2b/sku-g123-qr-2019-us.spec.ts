import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2019Us from './sku-g123-qr-2019-us';

describe(`with skuG123Qr2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuG123Qr2019Us preset`, () => {
    const skuG123Qr2019UsPreset =
      skuG123Qr2019Us().build<TInventoryEntryDraft>();
    expect(skuG123Qr2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2019Us preset when built for graphql`, () => {
    const skuG123Qr2019UsPresetGraphql =
      skuG123Qr2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
