import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2023Default from './sku-x234-wx-2023-default';

describe(`with skuX234Wx2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuX234Wx2023Default preset`, () => {
    const skuX234Wx2023DefaultPreset =
      skuX234Wx2023Default().build<TInventoryEntryDraft>();
    expect(skuX234Wx2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2023Default preset when built for graphql`, () => {
    const skuX234Wx2023DefaultPresetGraphql =
      skuX234Wx2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
