import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2023Eu from './sku-a789-bc-2023-eu';

describe(`with skuA789Bc2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuA789Bc2023Eu preset`, () => {
    const skuA789Bc2023EuPreset =
      skuA789Bc2023Eu().build<TInventoryEntryDraft>();
    expect(skuA789Bc2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuA789Bc2023Eu preset when built for graphql`, () => {
    const skuA789Bc2023EuPresetGraphql =
      skuA789Bc2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
