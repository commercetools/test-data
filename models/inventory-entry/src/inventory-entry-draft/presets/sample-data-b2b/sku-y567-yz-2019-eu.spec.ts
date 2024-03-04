import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2019Eu from './sku-y567-yz-2019-eu';

describe(`with skuY567Yz2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuY567Yz2019Eu preset`, () => {
    const skuY567Yz2019EuPreset =
      skuY567Yz2019Eu().build<TInventoryEntryDraft>();
    expect(skuY567Yz2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2019Eu preset when built for graphql`, () => {
    const skuY567Yz2019EuPresetGraphql =
      skuY567Yz2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
