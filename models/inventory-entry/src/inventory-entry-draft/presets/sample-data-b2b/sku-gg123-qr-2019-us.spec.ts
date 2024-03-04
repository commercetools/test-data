import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2019Us from './sku-gg123-qr-2019-us';

describe(`with skuGg123Qr2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuGg123Qr2019Us preset`, () => {
    const skuGg123Qr2019UsPreset =
      skuGg123Qr2019Us().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGg123Qr2019Us preset when built for graphql`, () => {
    const skuGg123Qr2019UsPresetGraphql =
      skuGg123Qr2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
