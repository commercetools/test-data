import type { TInventoryEntryDraft } from '../../../types';
import skuX456Yz2015Eu from './sku-x456-yz-2015-eu';

describe(`with skuX456Yz2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuX456Yz2015Eu preset`, () => {
    const skuX456Yz2015EuPreset =
      skuX456Yz2015Eu().build<TInventoryEntryDraft>();
    expect(skuX456Yz2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2015Eu preset when built for graphql`, () => {
    const skuX456Yz2015EuPresetGraphql =
      skuX456Yz2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuX456Yz2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
