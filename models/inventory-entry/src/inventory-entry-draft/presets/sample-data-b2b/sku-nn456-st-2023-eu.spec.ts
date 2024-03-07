import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2023Eu from './sku-nn456-st-2023-eu';

describe(`with skuNn456St2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuNn456St2023Eu preset`, () => {
    const skuNn456St2023EuPreset =
      skuNn456St2023Eu().build<TInventoryEntryDraft>();
    expect(skuNn456St2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNn456St2023Eu preset when built for graphql`, () => {
    const skuNn456St2023EuPresetGraphql =
      skuNn456St2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
