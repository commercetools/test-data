import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2015Default from './sku-jj234-wx-2015-default';

describe(`with skuJj234Wx2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuJj234Wx2015Default preset`, () => {
    const skuJj234Wx2015DefaultPreset =
      skuJj234Wx2015Default().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2015Default preset when built for graphql`, () => {
    const skuJj234Wx2015DefaultPresetGraphql =
      skuJj234Wx2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
