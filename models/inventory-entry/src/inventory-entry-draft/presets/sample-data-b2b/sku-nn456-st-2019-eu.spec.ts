import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2019Eu from './sku-nn456-st-2019-eu';

describe(`with skuNn456St2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuNn456St2019Eu preset`, () => {
    const skuNn456St2019EuPreset =
      skuNn456St2019Eu().build<TInventoryEntryDraft>();
    expect(skuNn456St2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNn456St2019Eu preset when built for graphql`, () => {
    const skuNn456St2019EuPresetGraphql =
      skuNn456St2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
