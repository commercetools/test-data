import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2015Eu from './sku-kk567-yz-2015-eu';

describe(`with skuKk567Yz2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuKk567Yz2015Eu preset`, () => {
    const skuKk567Yz2015EuPreset =
      skuKk567Yz2015Eu().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuKk567Yz2015Eu preset when built for graphql`, () => {
    const skuKk567Yz2015EuPresetGraphql =
      skuKk567Yz2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
