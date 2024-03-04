import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2023Default from './sku-jj234-wx-2023-default';

describe(`with skuJj234Wx2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuJj234Wx2023Default preset`, () => {
    const skuJj234Wx2023DefaultPreset =
      skuJj234Wx2023Default().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2023Default preset when built for graphql`, () => {
    const skuJj234Wx2023DefaultPresetGraphql =
      skuJj234Wx2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
