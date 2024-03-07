import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpRedDefault from './sku-xx890-op-red-default';

describe(`with skuXx890OpRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuXx890OpRedDefault preset`, () => {
    const skuXx890OpRedDefaultPreset =
      skuXx890OpRedDefault().build<TInventoryEntryDraft>();
    expect(skuXx890OpRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpRedDefault preset when built for graphql`, () => {
    const skuXx890OpRedDefaultPresetGraphql =
      skuXx890OpRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
