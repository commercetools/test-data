import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2015Eu from './sku-ee567-yz-2015-eu';

describe(`with skuEe567Yz2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuEe567Yz2015Eu preset`, () => {
    const skuEe567Yz2015EuPreset =
      skuEe567Yz2015Eu().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEe567Yz2015Eu preset when built for graphql`, () => {
    const skuEe567Yz2015EuPresetGraphql =
      skuEe567Yz2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
