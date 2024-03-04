import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2023Default from './sku-a789-bc-2023-default';

describe(`with skuA789Bc2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuA789Bc2023Default preset`, () => {
    const skuA789Bc2023DefaultPreset =
      skuA789Bc2023Default().build<TInventoryEntryDraft>();
    expect(skuA789Bc2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2023Default preset when built for graphql`, () => {
    const skuA789Bc2023DefaultPresetGraphql =
      skuA789Bc2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
