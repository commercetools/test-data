import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2015Default from './sku-l890-op-2015-default';

describe(`with skuL890Op2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuL890Op2015Default preset`, () => {
    const skuL890Op2015DefaultPreset =
      skuL890Op2015Default().build<TInventoryEntryDraft>();
    expect(skuL890Op2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuL890Op2015Default preset when built for graphql`, () => {
    const skuL890Op2015DefaultPresetGraphql =
      skuL890Op2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
