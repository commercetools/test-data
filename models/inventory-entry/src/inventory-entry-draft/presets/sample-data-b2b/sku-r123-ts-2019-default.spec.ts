import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2019Default from './sku-r123-ts-2019-default';

describe(`with skuR123Ts2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuR123Ts2019Default preset`, () => {
    const skuR123Ts2019DefaultPreset =
      skuR123Ts2019Default().build<TInventoryEntryDraft>();
    expect(skuR123Ts2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2019Default preset when built for graphql`, () => {
    const skuR123Ts2019DefaultPresetGraphql =
      skuR123Ts2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
