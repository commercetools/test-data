import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpRedDefault from './sku-ddd890-op-red-default';

describe(`with skuDdd890OpRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuDdd890OpRedDefault preset`, () => {
    const skuDdd890OpRedDefaultPreset =
      skuDdd890OpRedDefault().build<TInventoryEntryDraft>();
    expect(skuDdd890OpRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpRedDefault preset when built for graphql`, () => {
    const skuDdd890OpRedDefaultPresetGraphql =
      skuDdd890OpRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
