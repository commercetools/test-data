import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2023Us from './sku-gg123-qr-2023-us';

describe(`with skuGg123Qr2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuGg123Qr2023Us preset`, () => {
    const skuGg123Qr2023UsPreset =
      skuGg123Qr2023Us().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGg123Qr2023Us preset when built for graphql`, () => {
    const skuGg123Qr2023UsPresetGraphql =
      skuGg123Qr2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
