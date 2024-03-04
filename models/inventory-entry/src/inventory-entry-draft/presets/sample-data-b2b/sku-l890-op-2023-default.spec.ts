import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2023Default from './sku-l890-op-2023-default';

describe(`with skuL890Op2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuL890Op2023Default preset`, () => {
    const skuL890Op2023DefaultPreset =
      skuL890Op2023Default().build<TInventoryEntryDraft>();
    expect(skuL890Op2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2023Default preset when built for graphql`, () => {
    const skuL890Op2023DefaultPresetGraphql =
      skuL890Op2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
