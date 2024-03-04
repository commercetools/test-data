import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2023Us from './sku-nn456-st-2023-us';

describe(`with skuNn456St2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuNn456St2023Us preset`, () => {
    const skuNn456St2023UsPreset =
      skuNn456St2023Us().build<TInventoryEntryDraft>();
    expect(skuNn456St2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNn456St2023Us preset when built for graphql`, () => {
    const skuNn456St2023UsPresetGraphql =
      skuNn456St2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
