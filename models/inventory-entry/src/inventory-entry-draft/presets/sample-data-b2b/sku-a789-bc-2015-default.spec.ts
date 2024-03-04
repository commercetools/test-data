import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2015Default from './sku-a789-bc-2015-default';

describe(`with skuA789Bc2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuA789Bc2015Default preset`, () => {
    const skuA789Bc2015DefaultPreset =
      skuA789Bc2015Default().build<TInventoryEntryDraft>();
    expect(skuA789Bc2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2015Default preset when built for graphql`, () => {
    const skuA789Bc2015DefaultPresetGraphql =
      skuA789Bc2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
