import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpRedDefault from './sku-ddd890-op-red-default';

describe(`with skuDdd890OpRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuDdd890OpRedDefault preset`, () => {
    const skuDdd890OpRedDefaultPreset =
      skuDdd890OpRedDefault().build<TInventoryEntryDraft>();
    expect(skuDdd890OpRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDdd890OpRedDefault preset when built for graphql`, () => {
    const skuDdd890OpRedDefaultPresetGraphql =
      skuDdd890OpRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
