import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2023Eu from './sku-ee567-yz-2023-eu';

describe(`with skuEe567Yz2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuEe567Yz2023Eu preset`, () => {
    const skuEe567Yz2023EuPreset =
      skuEe567Yz2023Eu().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEe567Yz2023Eu preset when built for graphql`, () => {
    const skuEe567Yz2023EuPresetGraphql =
      skuEe567Yz2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
