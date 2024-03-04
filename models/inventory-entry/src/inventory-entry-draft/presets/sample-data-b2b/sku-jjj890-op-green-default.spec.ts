import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpGreenDefault from './sku-jjj890-op-green-default';

describe(`with skuJjj890OpGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuJjj890OpGreenDefault preset`, () => {
    const skuJjj890OpGreenDefaultPreset =
      skuJjj890OpGreenDefault().build<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpGreenDefault preset when built for graphql`, () => {
    const skuJjj890OpGreenDefaultPresetGraphql =
      skuJjj890OpGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
