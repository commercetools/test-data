import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2019Default from './sku-kk567-yz-2019-default';

describe(`with skuKk567Yz2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuKk567Yz2019Default preset`, () => {
    const skuKk567Yz2019DefaultPreset =
      skuKk567Yz2019Default().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuKk567Yz2019Default preset when built for graphql`, () => {
    const skuKk567Yz2019DefaultPresetGraphql =
      skuKk567Yz2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
