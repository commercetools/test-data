import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2019Default from './sku-jj234-wx-2019-default';

describe(`with skuJj234Wx2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuJj234Wx2019Default preset`, () => {
    const skuJj234Wx2019DefaultPreset =
      skuJj234Wx2019Default().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019Default preset when built for graphql`, () => {
    const skuJj234Wx2019DefaultPresetGraphql =
      skuJj234Wx2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
