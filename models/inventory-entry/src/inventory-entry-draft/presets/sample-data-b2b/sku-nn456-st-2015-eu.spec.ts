import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2015Eu from './sku-nn456-st-2015-eu';

describe(`with skuNn456St2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuNn456St2015Eu preset`, () => {
    const skuNn456St2015EuPreset =
      skuNn456St2015Eu().build<TInventoryEntryDraft>();
    expect(skuNn456St2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNn456St2015Eu preset when built for graphql`, () => {
    const skuNn456St2015EuPresetGraphql =
      skuNn456St2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
