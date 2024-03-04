import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2019Default from './sku-aa123-qr-2019-default';

describe(`with skuAa123Qr2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuAa123Qr2019Default preset`, () => {
    const skuAa123Qr2019DefaultPreset =
      skuAa123Qr2019Default().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2019Default preset when built for graphql`, () => {
    const skuAa123Qr2019DefaultPresetGraphql =
      skuAa123Qr2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
