import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2019Default from './sku-dd234-wx-2019-default';

describe(`with skuDd234Wx2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuDd234Wx2019Default preset`, () => {
    const skuDd234Wx2019DefaultPreset =
      skuDd234Wx2019Default().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDd234Wx2019Default preset when built for graphql`, () => {
    const skuDd234Wx2019DefaultPresetGraphql =
      skuDd234Wx2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
