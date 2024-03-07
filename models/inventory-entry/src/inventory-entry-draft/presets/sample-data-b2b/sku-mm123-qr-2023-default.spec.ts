import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2023Default from './sku-mm123-qr-2023-default';

describe(`with skuMm123Qr2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuMm123Qr2023Default preset`, () => {
    const skuMm123Qr2023DefaultPreset =
      skuMm123Qr2023Default().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuMm123Qr2023Default preset when built for graphql`, () => {
    const skuMm123Qr2023DefaultPresetGraphql =
      skuMm123Qr2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
