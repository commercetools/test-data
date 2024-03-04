import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2015Eu from './sku-a789-bc-2015-eu';

describe(`with skuA789Bc2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuA789Bc2015Eu preset`, () => {
    const skuA789Bc2015EuPreset =
      skuA789Bc2015Eu().build<TInventoryEntryDraft>();
    expect(skuA789Bc2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuA789Bc2015Eu preset when built for graphql`, () => {
    const skuA789Bc2015EuPresetGraphql =
      skuA789Bc2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
