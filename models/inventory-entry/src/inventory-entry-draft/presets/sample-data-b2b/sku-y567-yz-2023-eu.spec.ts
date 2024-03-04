import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2023Eu from './sku-y567-yz-2023-eu';

describe(`with skuY567Yz2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuY567Yz2023Eu preset`, () => {
    const skuY567Yz2023EuPreset =
      skuY567Yz2023Eu().build<TInventoryEntryDraft>();
    expect(skuY567Yz2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2023Eu preset when built for graphql`, () => {
    const skuY567Yz2023EuPresetGraphql =
      skuY567Yz2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
