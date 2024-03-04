import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2015Default from './sku-dd234-wx-2015-default';

describe(`with skuDd234Wx2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuDd234Wx2015Default preset`, () => {
    const skuDd234Wx2015DefaultPreset =
      skuDd234Wx2015Default().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2015Default preset when built for graphql`, () => {
    const skuDd234Wx2015DefaultPresetGraphql =
      skuDd234Wx2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
