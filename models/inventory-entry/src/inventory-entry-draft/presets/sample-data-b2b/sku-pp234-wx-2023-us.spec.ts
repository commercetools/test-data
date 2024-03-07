import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2023Us from './sku-pp234-wx-2023-us';

describe(`with skuPp234Wx2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuPp234Wx2023Us preset`, () => {
    const skuPp234Wx2023UsPreset =
      skuPp234Wx2023Us().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPp234Wx2023Us preset when built for graphql`, () => {
    const skuPp234Wx2023UsPresetGraphql =
      skuPp234Wx2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
