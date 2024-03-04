import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2019Eu from './sku-kk567-yz-2019-eu';

describe(`with skuKk567Yz2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuKk567Yz2019Eu preset`, () => {
    const skuKk567Yz2019EuPreset =
      skuKk567Yz2019Eu().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuKk567Yz2019Eu preset when built for graphql`, () => {
    const skuKk567Yz2019EuPresetGraphql =
      skuKk567Yz2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
