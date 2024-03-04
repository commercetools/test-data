import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2023Eu from './sku-qq567-yz-2023-eu';

describe(`with skuQq567Yz2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuQq567Yz2023Eu preset`, () => {
    const skuQq567Yz2023EuPreset =
      skuQq567Yz2023Eu().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2023Eu preset when built for graphql`, () => {
    const skuQq567Yz2023EuPresetGraphql =
      skuQq567Yz2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
