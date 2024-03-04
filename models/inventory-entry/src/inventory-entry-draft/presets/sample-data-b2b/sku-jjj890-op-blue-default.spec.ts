import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpBlueDefault from './sku-jjj890-op-blue-default';

describe(`with skuJjj890OpBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuJjj890OpBlueDefault preset`, () => {
    const skuJjj890OpBlueDefaultPreset =
      skuJjj890OpBlueDefault().build<TInventoryEntryDraft>();
    expect(skuJjj890OpBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJjj890OpBlueDefault preset when built for graphql`, () => {
    const skuJjj890OpBlueDefaultPresetGraphql =
      skuJjj890OpBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
