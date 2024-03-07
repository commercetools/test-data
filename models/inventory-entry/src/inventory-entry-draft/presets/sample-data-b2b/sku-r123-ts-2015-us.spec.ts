import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2015Us from './sku-r123-ts-2015-us';

describe(`with skuR123Ts2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuR123Ts2015Us preset`, () => {
    const skuR123Ts2015UsPreset =
      skuR123Ts2015Us().build<TInventoryEntryDraft>();
    expect(skuR123Ts2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2015Us preset when built for graphql`, () => {
    const skuR123Ts2015UsPresetGraphql =
      skuR123Ts2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
