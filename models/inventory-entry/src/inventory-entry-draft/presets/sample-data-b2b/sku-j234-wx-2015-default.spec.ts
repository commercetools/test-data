import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2015Default from './sku-j234-wx-2015-default';

describe(`with skuJ234Wx2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuJ234Wx2015Default preset`, () => {
    const skuJ234Wx2015DefaultPreset =
      skuJ234Wx2015Default().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2015Default preset when built for graphql`, () => {
    const skuJ234Wx2015DefaultPresetGraphql =
      skuJ234Wx2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
