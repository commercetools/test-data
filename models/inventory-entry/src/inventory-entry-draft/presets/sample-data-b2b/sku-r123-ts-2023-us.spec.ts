import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2023Us from './sku-r123-ts-2023-us';

describe(`with skuR123Ts2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuR123Ts2023Us preset`, () => {
    const skuR123Ts2023UsPreset =
      skuR123Ts2023Us().build<TInventoryEntryDraft>();
    expect(skuR123Ts2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2023Us preset when built for graphql`, () => {
    const skuR123Ts2023UsPresetGraphql =
      skuR123Ts2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
