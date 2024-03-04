import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2023Default from './sku-r123-ts-2023-default';

describe(`with skuR123Ts2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuR123Ts2023Default preset`, () => {
    const skuR123Ts2023DefaultPreset =
      skuR123Ts2023Default().build<TInventoryEntryDraft>();
    expect(skuR123Ts2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuR123Ts2023Default preset when built for graphql`, () => {
    const skuR123Ts2023DefaultPresetGraphql =
      skuR123Ts2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
