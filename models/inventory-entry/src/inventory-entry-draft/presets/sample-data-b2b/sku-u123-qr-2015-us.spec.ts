import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2015Us from './sku-u123-qr-2015-us';

describe(`with skuU123Qr2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuU123Qr2015Us preset`, () => {
    const skuU123Qr2015UsPreset =
      skuU123Qr2015Us().build<TInventoryEntryDraft>();
    expect(skuU123Qr2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2015Us preset when built for graphql`, () => {
    const skuU123Qr2015UsPresetGraphql =
      skuU123Qr2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
