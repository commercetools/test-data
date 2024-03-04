import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpRedUs from './sku-xx890-op-red-us';

describe(`with skuXx890OpRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuXx890OpRedUs preset`, () => {
    const skuXx890OpRedUsPreset =
      skuXx890OpRedUs().build<TInventoryEntryDraft>();
    expect(skuXx890OpRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpRedUs preset when built for graphql`, () => {
    const skuXx890OpRedUsPresetGraphql =
      skuXx890OpRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
