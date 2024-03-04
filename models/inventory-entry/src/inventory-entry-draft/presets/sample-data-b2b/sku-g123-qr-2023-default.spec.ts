import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2023Default from './sku-g123-qr-2023-default';

describe(`with skuG123Qr2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuG123Qr2023Default preset`, () => {
    const skuG123Qr2023DefaultPreset =
      skuG123Qr2023Default().build<TInventoryEntryDraft>();
    expect(skuG123Qr2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2023Default preset when built for graphql`, () => {
    const skuG123Qr2023DefaultPresetGraphql =
      skuG123Qr2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
