import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2015Default from './sku-nn456-st-2015-default';

describe(`with skuNn456St2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuNn456St2015Default preset`, () => {
    const skuNn456St2015DefaultPreset =
      skuNn456St2015Default().build<TInventoryEntryDraft>();
    expect(skuNn456St2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNn456St2015Default preset when built for graphql`, () => {
    const skuNn456St2015DefaultPresetGraphql =
      skuNn456St2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
