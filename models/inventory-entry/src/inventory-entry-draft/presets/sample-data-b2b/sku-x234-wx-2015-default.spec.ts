import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2015Default from './sku-x234-wx-2015-default';

describe(`with skuX234Wx2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuX234Wx2015Default preset`, () => {
    const skuX234Wx2015DefaultPreset =
      skuX234Wx2015Default().build<TInventoryEntryDraft>();
    expect(skuX234Wx2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX234Wx2015Default preset when built for graphql`, () => {
    const skuX234Wx2015DefaultPresetGraphql =
      skuX234Wx2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
