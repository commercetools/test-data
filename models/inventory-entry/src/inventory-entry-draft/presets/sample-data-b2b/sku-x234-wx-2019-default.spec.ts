import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2019Default from './sku-x234-wx-2019-default';

describe(`with skuX234Wx2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuX234Wx2019Default preset`, () => {
    const skuX234Wx2019DefaultPreset =
      skuX234Wx2019Default().build<TInventoryEntryDraft>();
    expect(skuX234Wx2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2019Default preset when built for graphql`, () => {
    const skuX234Wx2019DefaultPresetGraphql =
      skuX234Wx2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
