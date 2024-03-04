import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpRedDefault from './sku-jjj890-op-red-default';

describe(`with skuJjj890OpRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuJjj890OpRedDefault preset`, () => {
    const skuJjj890OpRedDefaultPreset =
      skuJjj890OpRedDefault().build<TInventoryEntryDraft>();
    expect(skuJjj890OpRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJjj890OpRedDefault preset when built for graphql`, () => {
    const skuJjj890OpRedDefaultPresetGraphql =
      skuJjj890OpRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
