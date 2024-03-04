import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2015Default from './sku-ll890-op-2015-default';

describe(`with skuLl890Op2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuLl890Op2015Default preset`, () => {
    const skuLl890Op2015DefaultPreset =
      skuLl890Op2015Default().build<TInventoryEntryDraft>();
    expect(skuLl890Op2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLl890Op2015Default preset when built for graphql`, () => {
    const skuLl890Op2015DefaultPresetGraphql =
      skuLl890Op2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
