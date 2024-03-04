import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2019Eu from './sku-qq567-yz-2019-eu';

describe(`with skuQq567Yz2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuQq567Yz2019Eu preset`, () => {
    const skuQq567Yz2019EuPreset =
      skuQq567Yz2019Eu().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2019Eu preset when built for graphql`, () => {
    const skuQq567Yz2019EuPresetGraphql =
      skuQq567Yz2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
