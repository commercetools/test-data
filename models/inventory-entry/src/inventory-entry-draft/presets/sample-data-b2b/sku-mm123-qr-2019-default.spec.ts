import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2019Default from './sku-mm123-qr-2019-default';

describe(`with skuMm123Qr2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuMm123Qr2019Default preset`, () => {
    const skuMm123Qr2019DefaultPreset =
      skuMm123Qr2019Default().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuMm123Qr2019Default preset when built for graphql`, () => {
    const skuMm123Qr2019DefaultPresetGraphql =
      skuMm123Qr2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
