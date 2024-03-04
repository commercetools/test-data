import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2015Default from './sku-u123-qr-2015-default';

describe(`with skuU123Qr2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuU123Qr2015Default preset`, () => {
    const skuU123Qr2015DefaultPreset =
      skuU123Qr2015Default().build<TInventoryEntryDraft>();
    expect(skuU123Qr2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuU123Qr2015Default preset when built for graphql`, () => {
    const skuU123Qr2015DefaultPresetGraphql =
      skuU123Qr2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
