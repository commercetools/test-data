import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpBlueUs from './sku-ddd890-op-blue-us';

describe(`with skuDdd890OpBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuDdd890OpBlueUs preset`, () => {
    const skuDdd890OpBlueUsPreset =
      skuDdd890OpBlueUs().build<TInventoryEntryDraft>();
    expect(skuDdd890OpBlueUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDdd890OpBlueUs preset when built for graphql`, () => {
    const skuDdd890OpBlueUsPresetGraphql =
      skuDdd890OpBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
