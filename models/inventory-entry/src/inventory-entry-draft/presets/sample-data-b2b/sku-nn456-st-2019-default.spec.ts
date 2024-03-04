import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2019Default from './sku-nn456-st-2019-default';

describe(`with skuNn456St2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuNn456St2019Default preset`, () => {
    const skuNn456St2019DefaultPreset =
      skuNn456St2019Default().build<TInventoryEntryDraft>();
    expect(skuNn456St2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNn456St2019Default preset when built for graphql`, () => {
    const skuNn456St2019DefaultPresetGraphql =
      skuNn456St2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
