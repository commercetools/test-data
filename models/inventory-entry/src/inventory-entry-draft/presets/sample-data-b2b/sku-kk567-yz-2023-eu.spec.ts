import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2023Eu from './sku-kk567-yz-2023-eu';

describe(`with skuKk567Yz2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuKk567Yz2023Eu preset`, () => {
    const skuKk567Yz2023EuPreset =
      skuKk567Yz2023Eu().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuKk567Yz2023Eu preset when built for graphql`, () => {
    const skuKk567Yz2023EuPresetGraphql =
      skuKk567Yz2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
