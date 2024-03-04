import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2023Default from './sku-gg123-qr-2023-default';

describe(`with skuGg123Qr2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuGg123Qr2023Default preset`, () => {
    const skuGg123Qr2023DefaultPreset =
      skuGg123Qr2023Default().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGg123Qr2023Default preset when built for graphql`, () => {
    const skuGg123Qr2023DefaultPresetGraphql =
      skuGg123Qr2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
