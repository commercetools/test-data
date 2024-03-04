import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2023Default from './sku-aa123-qr-2023-default';

describe(`with skuAa123Qr2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuAa123Qr2023Default preset`, () => {
    const skuAa123Qr2023DefaultPreset =
      skuAa123Qr2023Default().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAa123Qr2023Default preset when built for graphql`, () => {
    const skuAa123Qr2023DefaultPresetGraphql =
      skuAa123Qr2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
