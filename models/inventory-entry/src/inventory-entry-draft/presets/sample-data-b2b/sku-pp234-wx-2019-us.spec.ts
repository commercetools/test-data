import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2019Us from './sku-pp234-wx-2019-us';

describe(`with skuPp234Wx2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuPp234Wx2019Us preset`, () => {
    const skuPp234Wx2019UsPreset =
      skuPp234Wx2019Us().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPp234Wx2019Us preset when built for graphql`, () => {
    const skuPp234Wx2019UsPresetGraphql =
      skuPp234Wx2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
