import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2015Default from './sku-pp234-wx-2015-default';

describe(`with skuPp234Wx2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuPp234Wx2015Default preset`, () => {
    const skuPp234Wx2015DefaultPreset =
      skuPp234Wx2015Default().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPp234Wx2015Default preset when built for graphql`, () => {
    const skuPp234Wx2015DefaultPresetGraphql =
      skuPp234Wx2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
