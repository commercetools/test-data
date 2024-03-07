import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2019Eu from './sku-x456-yz-2019-eu';

describe(`with skuX456Yz2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuX456Yz2019Eu preset`, () => {
    const skuX456Yz2019EuPreset =
      skuX456Yz2019Eu().build<TInventoryEntryDraft>();
    expect(skuX456Yz2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2019Eu preset when built for graphql`, () => {
    const skuX456Yz2019EuPresetGraphql =
      skuX456Yz2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
