import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2015Default from './sku-z890-op-2015-default';

describe(`with skuZ890Op2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuZ890Op2015Default preset`, () => {
    const skuZ890Op2015DefaultPreset =
      skuZ890Op2015Default().build<TInventoryEntryDraft>();
    expect(skuZ890Op2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZ890Op2015Default preset when built for graphql`, () => {
    const skuZ890Op2015DefaultPresetGraphql =
      skuZ890Op2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
