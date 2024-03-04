import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2015Default from './sku-mm123-qr-2015-default';

describe(`with skuMm123Qr2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuMm123Qr2015Default preset`, () => {
    const skuMm123Qr2015DefaultPreset =
      skuMm123Qr2015Default().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2015Default preset when built for graphql`, () => {
    const skuMm123Qr2015DefaultPresetGraphql =
      skuMm123Qr2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
