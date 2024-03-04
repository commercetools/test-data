import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpGreenUs from './sku-jjj890-op-green-us';

describe(`with skuJjj890OpGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuJjj890OpGreenUs preset`, () => {
    const skuJjj890OpGreenUsPreset =
      skuJjj890OpGreenUs().build<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpGreenUs preset when built for graphql`, () => {
    const skuJjj890OpGreenUsPresetGraphql =
      skuJjj890OpGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
