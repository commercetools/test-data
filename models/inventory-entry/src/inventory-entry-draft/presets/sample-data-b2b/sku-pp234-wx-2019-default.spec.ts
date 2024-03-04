import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2019Default from './sku-pp234-wx-2019-default';

describe(`with skuPp234Wx2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuPp234Wx2019Default preset`, () => {
    const skuPp234Wx2019DefaultPreset =
      skuPp234Wx2019Default().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2019Default preset when built for graphql`, () => {
    const skuPp234Wx2019DefaultPresetGraphql =
      skuPp234Wx2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
