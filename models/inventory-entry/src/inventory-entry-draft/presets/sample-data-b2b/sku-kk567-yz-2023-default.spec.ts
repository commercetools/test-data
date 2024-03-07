import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2023Default from './sku-kk567-yz-2023-default';

describe(`with skuKk567Yz2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuKk567Yz2023Default preset`, () => {
    const skuKk567Yz2023DefaultPreset =
      skuKk567Yz2023Default().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuKk567Yz2023Default preset when built for graphql`, () => {
    const skuKk567Yz2023DefaultPresetGraphql =
      skuKk567Yz2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "kk567-yz-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
