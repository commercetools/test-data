import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpGreenUs from './sku-ddd890-op-green-us';

describe(`with skuDdd890OpGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuDdd890OpGreenUs preset`, () => {
    const skuDdd890OpGreenUsPreset =
      skuDdd890OpGreenUs().build<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDdd890OpGreenUs preset when built for graphql`, () => {
    const skuDdd890OpGreenUsPresetGraphql =
      skuDdd890OpGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
