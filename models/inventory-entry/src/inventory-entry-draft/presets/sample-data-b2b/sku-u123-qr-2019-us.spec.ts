import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2019Us from './sku-u123-qr-2019-us';

describe(`with skuU123Qr2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuU123Qr2019Us preset`, () => {
    const skuU123Qr2019UsPreset =
      skuU123Qr2019Us().build<TInventoryEntryDraft>();
    expect(skuU123Qr2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuU123Qr2019Us preset when built for graphql`, () => {
    const skuU123Qr2019UsPresetGraphql =
      skuU123Qr2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
