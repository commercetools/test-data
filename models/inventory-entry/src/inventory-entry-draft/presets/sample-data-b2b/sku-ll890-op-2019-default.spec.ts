import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2019Default from './sku-ll890-op-2019-default';

describe(`with skuLl890Op2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuLl890Op2019Default preset`, () => {
    const skuLl890Op2019DefaultPreset =
      skuLl890Op2019Default().build<TInventoryEntryDraft>();
    expect(skuLl890Op2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2019Default preset when built for graphql`, () => {
    const skuLl890Op2019DefaultPresetGraphql =
      skuLl890Op2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
