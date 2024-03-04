import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpRedUs from './sku-ddd890-op-red-us';

describe(`with skuDdd890OpRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuDdd890OpRedUs preset`, () => {
    const skuDdd890OpRedUsPreset =
      skuDdd890OpRedUs().build<TInventoryEntryDraft>();
    expect(skuDdd890OpRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpRedUs preset when built for graphql`, () => {
    const skuDdd890OpRedUsPresetGraphql =
      skuDdd890OpRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
