import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2019Default from './sku-z890-op-2019-default';

describe(`with skuZ890Op2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuZ890Op2019Default preset`, () => {
    const skuZ890Op2019DefaultPreset =
      skuZ890Op2019Default().build<TInventoryEntryDraft>();
    expect(skuZ890Op2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZ890Op2019Default preset when built for graphql`, () => {
    const skuZ890Op2019DefaultPresetGraphql =
      skuZ890Op2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
