import type { TInventoryEntryDraft } from '../../../types';
import skuWw567YzRedDefault from './sku-ww567-yz-red-default';

describe(`with skuWw567YzRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuWw567YzRedDefault preset`, () => {
    const skuWw567YzRedDefaultPreset =
      skuWw567YzRedDefault().build<TInventoryEntryDraft>();
    expect(skuWw567YzRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuWw567YzRedDefault preset when built for graphql`, () => {
    const skuWw567YzRedDefaultPresetGraphql =
      skuWw567YzRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuWw567YzRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
