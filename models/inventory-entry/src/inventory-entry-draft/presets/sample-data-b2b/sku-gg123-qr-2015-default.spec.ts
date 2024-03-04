import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2015Default from './sku-gg123-qr-2015-default';

describe(`with skuGg123Qr2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuGg123Qr2015Default preset`, () => {
    const skuGg123Qr2015DefaultPreset =
      skuGg123Qr2015Default().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGg123Qr2015Default preset when built for graphql`, () => {
    const skuGg123Qr2015DefaultPresetGraphql =
      skuGg123Qr2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
