import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2023Default from './sku-nn456-st-2023-default';

describe(`with skuNn456St2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuNn456St2023Default preset`, () => {
    const skuNn456St2023DefaultPreset =
      skuNn456St2023Default().build<TInventoryEntryDraft>();
    expect(skuNn456St2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNn456St2023Default preset when built for graphql`, () => {
    const skuNn456St2023DefaultPresetGraphql =
      skuNn456St2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
