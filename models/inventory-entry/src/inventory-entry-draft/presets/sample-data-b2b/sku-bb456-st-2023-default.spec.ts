import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2023Default from './sku-bb456-st-2023-default';

describe(`with skuBb456St2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuBb456St2023Default preset`, () => {
    const skuBb456St2023DefaultPreset =
      skuBb456St2023Default().build<TInventoryEntryDraft>();
    expect(skuBb456St2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBb456St2023Default preset when built for graphql`, () => {
    const skuBb456St2023DefaultPresetGraphql =
      skuBb456St2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
