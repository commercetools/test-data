import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2019Default from './sku-j234-wx-2019-default';

describe(`with skuJ234Wx2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuJ234Wx2019Default preset`, () => {
    const skuJ234Wx2019DefaultPreset =
      skuJ234Wx2019Default().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2019Default preset when built for graphql`, () => {
    const skuJ234Wx2019DefaultPresetGraphql =
      skuJ234Wx2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
