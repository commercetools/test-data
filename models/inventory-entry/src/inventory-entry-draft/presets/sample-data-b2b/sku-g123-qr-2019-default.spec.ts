import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2019Default from './sku-g123-qr-2019-default';

describe(`with skuG123Qr2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuG123Qr2019Default preset`, () => {
    const skuG123Qr2019DefaultPreset =
      skuG123Qr2019Default().build<TInventoryEntryDraft>();
    expect(skuG123Qr2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuG123Qr2019Default preset when built for graphql`, () => {
    const skuG123Qr2019DefaultPresetGraphql =
      skuG123Qr2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
