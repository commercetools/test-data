import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2015Default from './sku-g123-qr-2015-default';

describe(`with skuG123Qr2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuG123Qr2015Default preset`, () => {
    const skuG123Qr2015DefaultPreset =
      skuG123Qr2015Default().build<TInventoryEntryDraft>();
    expect(skuG123Qr2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2015Default preset when built for graphql`, () => {
    const skuG123Qr2015DefaultPresetGraphql =
      skuG123Qr2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
