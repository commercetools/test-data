import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzGreenDefault from './sku-iii567-yz-green-default';

describe(`with skuIii567YzGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuIii567YzGreenDefault preset`, () => {
    const skuIii567YzGreenDefaultPreset =
      skuIii567YzGreenDefault().build<TInventoryEntryDraft>();
    expect(skuIii567YzGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzGreenDefault preset when built for graphql`, () => {
    const skuIii567YzGreenDefaultPresetGraphql =
      skuIii567YzGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
