import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2019Default from './sku-u123-qr-2019-default';

describe(`with skuU123Qr2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuU123Qr2019Default preset`, () => {
    const skuU123Qr2019DefaultPreset =
      skuU123Qr2019Default().build<TInventoryEntryDraft>();
    expect(skuU123Qr2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuU123Qr2019Default preset when built for graphql`, () => {
    const skuU123Qr2019DefaultPresetGraphql =
      skuU123Qr2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
