import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2019Eu from './sku-k567-yz-2019-eu';

describe(`with skuK567Yz2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuK567Yz2019Eu preset`, () => {
    const skuK567Yz2019EuPreset =
      skuK567Yz2019Eu().build<TInventoryEntryDraft>();
    expect(skuK567Yz2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2019Eu preset when built for graphql`, () => {
    const skuK567Yz2019EuPresetGraphql =
      skuK567Yz2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
