import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2023Default from './sku-j234-wx-2023-default';

describe(`with skuJ234Wx2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuJ234Wx2023Default preset`, () => {
    const skuJ234Wx2023DefaultPreset =
      skuJ234Wx2023Default().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2023Default preset when built for graphql`, () => {
    const skuJ234Wx2023DefaultPresetGraphql =
      skuJ234Wx2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
