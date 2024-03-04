import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2019Default from './sku-gg123-qr-2019-default';

describe(`with skuGg123Qr2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuGg123Qr2019Default preset`, () => {
    const skuGg123Qr2019DefaultPreset =
      skuGg123Qr2019Default().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGg123Qr2019Default preset when built for graphql`, () => {
    const skuGg123Qr2019DefaultPresetGraphql =
      skuGg123Qr2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
