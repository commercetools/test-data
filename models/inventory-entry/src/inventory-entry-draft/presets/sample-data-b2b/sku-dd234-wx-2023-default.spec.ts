import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2023Default from './sku-dd234-wx-2023-default';

describe(`with skuDd234Wx2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuDd234Wx2023Default preset`, () => {
    const skuDd234Wx2023DefaultPreset =
      skuDd234Wx2023Default().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2023Default preset when built for graphql`, () => {
    const skuDd234Wx2023DefaultPresetGraphql =
      skuDd234Wx2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
