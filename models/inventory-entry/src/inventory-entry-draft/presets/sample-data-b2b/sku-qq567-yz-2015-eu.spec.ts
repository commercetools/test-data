import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2015Eu from './sku-qq567-yz-2015-eu';

describe(`with skuQq567Yz2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuQq567Yz2015Eu preset`, () => {
    const skuQq567Yz2015EuPreset =
      skuQq567Yz2015Eu().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuQq567Yz2015Eu preset when built for graphql`, () => {
    const skuQq567Yz2015EuPresetGraphql =
      skuQq567Yz2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
