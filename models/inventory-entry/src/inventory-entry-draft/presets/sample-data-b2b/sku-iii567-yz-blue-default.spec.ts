import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzBlueDefault from './sku-iii567-yz-blue-default';

describe(`with skuIii567YzBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuIii567YzBlueDefault preset`, () => {
    const skuIii567YzBlueDefaultPreset =
      skuIii567YzBlueDefault().build<TInventoryEntryDraft>();
    expect(skuIii567YzBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueDefault preset when built for graphql`, () => {
    const skuIii567YzBlueDefaultPresetGraphql =
      skuIii567YzBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
