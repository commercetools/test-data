import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2019Eu from './sku-a789-bc-2019-eu';

describe(`with skuA789Bc2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuA789Bc2019Eu preset`, () => {
    const skuA789Bc2019EuPreset =
      skuA789Bc2019Eu().build<TInventoryEntryDraft>();
    expect(skuA789Bc2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2019Eu preset when built for graphql`, () => {
    const skuA789Bc2019EuPresetGraphql =
      skuA789Bc2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
