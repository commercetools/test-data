import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2019Us from './sku-r123-ts-2019-us';

describe(`with skuR123Ts2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuR123Ts2019Us preset`, () => {
    const skuR123Ts2019UsPreset =
      skuR123Ts2019Us().build<TInventoryEntryDraft>();
    expect(skuR123Ts2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2019Us preset when built for graphql`, () => {
    const skuR123Ts2019UsPresetGraphql =
      skuR123Ts2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
