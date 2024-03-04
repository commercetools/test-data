import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2019Eu from './sku-ee567-yz-2019-eu';

describe(`with skuEe567Yz2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuEe567Yz2019Eu preset`, () => {
    const skuEe567Yz2019EuPreset =
      skuEe567Yz2019Eu().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2019Eu preset when built for graphql`, () => {
    const skuEe567Yz2019EuPresetGraphql =
      skuEe567Yz2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
