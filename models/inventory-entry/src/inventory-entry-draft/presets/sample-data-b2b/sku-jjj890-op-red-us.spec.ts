import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpRedUs from './sku-jjj890-op-red-us';

describe(`with skuJjj890OpRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuJjj890OpRedUs preset`, () => {
    const skuJjj890OpRedUsPreset =
      skuJjj890OpRedUs().build<TInventoryEntryDraft>();
    expect(skuJjj890OpRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJjj890OpRedUs preset when built for graphql`, () => {
    const skuJjj890OpRedUsPresetGraphql =
      skuJjj890OpRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
