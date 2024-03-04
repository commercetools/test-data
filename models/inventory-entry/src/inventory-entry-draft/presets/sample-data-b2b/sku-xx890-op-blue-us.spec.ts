import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpBlueUs from './sku-xx890-op-blue-us';

describe(`with skuXx890OpBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuXx890OpBlueUs preset`, () => {
    const skuXx890OpBlueUsPreset =
      skuXx890OpBlueUs().build<TInventoryEntryDraft>();
    expect(skuXx890OpBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpBlueUs preset when built for graphql`, () => {
    const skuXx890OpBlueUsPresetGraphql =
      skuXx890OpBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
