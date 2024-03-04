import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpGreenDefault from './sku-xx890-op-green-default';

describe(`with skuXx890OpGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuXx890OpGreenDefault preset`, () => {
    const skuXx890OpGreenDefaultPreset =
      skuXx890OpGreenDefault().build<TInventoryEntryDraft>();
    expect(skuXx890OpGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpGreenDefault preset when built for graphql`, () => {
    const skuXx890OpGreenDefaultPresetGraphql =
      skuXx890OpGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
