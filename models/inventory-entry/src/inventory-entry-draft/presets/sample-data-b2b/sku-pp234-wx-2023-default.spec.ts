import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2023Default from './sku-pp234-wx-2023-default';

describe(`with skuPp234Wx2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuPp234Wx2023Default preset`, () => {
    const skuPp234Wx2023DefaultPreset =
      skuPp234Wx2023Default().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2023Default preset when built for graphql`, () => {
    const skuPp234Wx2023DefaultPresetGraphql =
      skuPp234Wx2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
