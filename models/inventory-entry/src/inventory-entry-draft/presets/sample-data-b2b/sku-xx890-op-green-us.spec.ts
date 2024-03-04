import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpGreenUs from './sku-xx890-op-green-us';

describe(`with skuXx890OpGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuXx890OpGreenUs preset`, () => {
    const skuXx890OpGreenUsPreset =
      skuXx890OpGreenUs().build<TInventoryEntryDraft>();
    expect(skuXx890OpGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpGreenUs preset when built for graphql`, () => {
    const skuXx890OpGreenUsPresetGraphql =
      skuXx890OpGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
