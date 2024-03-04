import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpBlueUs from './sku-jjj890-op-blue-us';

describe(`with skuJjj890OpBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuJjj890OpBlueUs preset`, () => {
    const skuJjj890OpBlueUsPreset =
      skuJjj890OpBlueUs().build<TInventoryEntryDraft>();
    expect(skuJjj890OpBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJjj890OpBlueUs preset when built for graphql`, () => {
    const skuJjj890OpBlueUsPresetGraphql =
      skuJjj890OpBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
