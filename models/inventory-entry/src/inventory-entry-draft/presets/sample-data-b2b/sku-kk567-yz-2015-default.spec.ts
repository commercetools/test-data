import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2015Default from './sku-kk567-yz-2015-default';

describe(`with skuKk567Yz2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuKk567Yz2015Default preset`, () => {
    const skuKk567Yz2015DefaultPreset =
      skuKk567Yz2015Default().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuKk567Yz2015Default preset when built for graphql`, () => {
    const skuKk567Yz2015DefaultPresetGraphql =
      skuKk567Yz2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
