import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2015Default from './sku-aa123-qr-2015-default';

describe(`with skuAa123Qr2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuAa123Qr2015Default preset`, () => {
    const skuAa123Qr2015DefaultPreset =
      skuAa123Qr2015Default().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2015Default preset when built for graphql`, () => {
    const skuAa123Qr2015DefaultPresetGraphql =
      skuAa123Qr2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
