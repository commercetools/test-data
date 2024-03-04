import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2015Eu from './sku-e567-yz-2015-eu';

describe(`with skuE567Yz2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuE567Yz2015Eu preset`, () => {
    const skuE567Yz2015EuPreset =
      skuE567Yz2015Eu().build<TInventoryEntryDraft>();
    expect(skuE567Yz2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015Eu preset when built for graphql`, () => {
    const skuE567Yz2015EuPresetGraphql =
      skuE567Yz2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
