import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpBlueDefault from './sku-xx890-op-blue-default';

describe(`with skuXx890OpBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuXx890OpBlueDefault preset`, () => {
    const skuXx890OpBlueDefaultPreset =
      skuXx890OpBlueDefault().build<TInventoryEntryDraft>();
    expect(skuXx890OpBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpBlueDefault preset when built for graphql`, () => {
    const skuXx890OpBlueDefaultPresetGraphql =
      skuXx890OpBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
