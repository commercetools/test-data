import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2019Default from './sku-a789-bc-2019-default';

describe(`with skuA789Bc2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuA789Bc2019Default preset`, () => {
    const skuA789Bc2019DefaultPreset =
      skuA789Bc2019Default().build<TInventoryEntryDraft>();
    expect(skuA789Bc2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2019Default preset when built for graphql`, () => {
    const skuA789Bc2019DefaultPresetGraphql =
      skuA789Bc2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
