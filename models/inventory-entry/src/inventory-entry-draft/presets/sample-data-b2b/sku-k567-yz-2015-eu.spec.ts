import type { TInventoryEntryDraft } from '../../../types';
import skuK567Yz2015Eu from './sku-k567-yz-2015-eu';

describe(`with skuK567Yz2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuK567Yz2015Eu preset`, () => {
    const skuK567Yz2015EuPreset =
      skuK567Yz2015Eu().build<TInventoryEntryDraft>();
    expect(skuK567Yz2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuK567Yz2015Eu preset when built for graphql`, () => {
    const skuK567Yz2015EuPresetGraphql =
      skuK567Yz2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuK567Yz2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
