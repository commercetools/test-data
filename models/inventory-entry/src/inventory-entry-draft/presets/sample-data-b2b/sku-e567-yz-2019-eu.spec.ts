import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2019Eu from './sku-e567-yz-2019-eu';

describe(`with skuE567Yz2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuE567Yz2019Eu preset`, () => {
    const skuE567Yz2019EuPreset =
      skuE567Yz2019Eu().build<TInventoryEntryDraft>();
    expect(skuE567Yz2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2019Eu preset when built for graphql`, () => {
    const skuE567Yz2019EuPresetGraphql =
      skuE567Yz2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
