import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2015Default from './sku-r123-ts-2015-default';

describe(`with skuR123Ts2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuR123Ts2015Default preset`, () => {
    const skuR123Ts2015DefaultPreset =
      skuR123Ts2015Default().build<TInventoryEntryDraft>();
    expect(skuR123Ts2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2015Default preset when built for graphql`, () => {
    const skuR123Ts2015DefaultPresetGraphql =
      skuR123Ts2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
