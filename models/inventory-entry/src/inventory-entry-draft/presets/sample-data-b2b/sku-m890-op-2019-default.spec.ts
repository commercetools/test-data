import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2019Default from './sku-m890-op-2019-default';

describe(`with skuM890Op2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuM890Op2019Default preset`, () => {
    const skuM890Op2019DefaultPreset =
      skuM890Op2019Default().build<TInventoryEntryDraft>();
    expect(skuM890Op2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuM890Op2019Default preset when built for graphql`, () => {
    const skuM890Op2019DefaultPresetGraphql =
      skuM890Op2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
