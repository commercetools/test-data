import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2015Eu from './sku-y567-yz-2015-eu';

describe(`with skuY567Yz2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuY567Yz2015Eu preset`, () => {
    const skuY567Yz2015EuPreset =
      skuY567Yz2015Eu().build<TInventoryEntryDraft>();
    expect(skuY567Yz2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2015Eu preset when built for graphql`, () => {
    const skuY567Yz2015EuPresetGraphql =
      skuY567Yz2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "y567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
