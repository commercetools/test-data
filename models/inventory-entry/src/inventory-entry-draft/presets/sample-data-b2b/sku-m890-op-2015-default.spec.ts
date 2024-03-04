import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2015Default from './sku-m890-op-2015-default';

describe(`with skuM890Op2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuM890Op2015Default preset`, () => {
    const skuM890Op2015DefaultPreset =
      skuM890Op2015Default().build<TInventoryEntryDraft>();
    expect(skuM890Op2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2015Default preset when built for graphql`, () => {
    const skuM890Op2015DefaultPresetGraphql =
      skuM890Op2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
