import type { TInventoryEntryDraft } from '../../../types';
import skuIii567YzRedDefault from './sku-iii567-yz-red-default';

describe(`with skuIii567YzRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuIii567YzRedDefault preset`, () => {
    const skuIii567YzRedDefaultPreset =
      skuIii567YzRedDefault().build<TInventoryEntryDraft>();
    expect(skuIii567YzRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedDefault preset when built for graphql`, () => {
    const skuIii567YzRedDefaultPresetGraphql =
      skuIii567YzRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuIii567YzRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
