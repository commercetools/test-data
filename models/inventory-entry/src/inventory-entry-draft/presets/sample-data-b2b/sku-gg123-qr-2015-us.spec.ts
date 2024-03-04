import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2015Us from './sku-gg123-qr-2015-us';

describe(`with skuGg123Qr2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuGg123Qr2015Us preset`, () => {
    const skuGg123Qr2015UsPreset =
      skuGg123Qr2015Us().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGg123Qr2015Us preset when built for graphql`, () => {
    const skuGg123Qr2015UsPresetGraphql =
      skuGg123Qr2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
