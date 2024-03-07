import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2023Default from './sku-u123-qr-2023-default';

describe(`with skuU123Qr2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuU123Qr2023Default preset`, () => {
    const skuU123Qr2023DefaultPreset =
      skuU123Qr2023Default().build<TInventoryEntryDraft>();
    expect(skuU123Qr2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2023Default preset when built for graphql`, () => {
    const skuU123Qr2023DefaultPresetGraphql =
      skuU123Qr2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
