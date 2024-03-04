import type { TInventoryEntryDraft } from '../../../types';
import skuCcc567YzRedDefault from './sku-ccc567-yz-red-default';

describe(`with skuCcc567YzRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuCcc567YzRedDefault preset`, () => {
    const skuCcc567YzRedDefaultPreset =
      skuCcc567YzRedDefault().build<TInventoryEntryDraft>();
    expect(skuCcc567YzRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcc567YzRedDefault preset when built for graphql`, () => {
    const skuCcc567YzRedDefaultPresetGraphql =
      skuCcc567YzRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuCcc567YzRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
