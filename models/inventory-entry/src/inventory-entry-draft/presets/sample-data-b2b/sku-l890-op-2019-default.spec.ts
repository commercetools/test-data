import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2019Default from './sku-l890-op-2019-default';

describe(`with skuL890Op2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuL890Op2019Default preset`, () => {
    const skuL890Op2019DefaultPreset =
      skuL890Op2019Default().build<TInventoryEntryDraft>();
    expect(skuL890Op2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2019Default preset when built for graphql`, () => {
    const skuL890Op2019DefaultPresetGraphql =
      skuL890Op2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
