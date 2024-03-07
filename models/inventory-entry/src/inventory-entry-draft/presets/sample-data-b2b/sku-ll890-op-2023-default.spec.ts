import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2023Default from './sku-ll890-op-2023-default';

describe(`with skuLl890Op2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuLl890Op2023Default preset`, () => {
    const skuLl890Op2023DefaultPreset =
      skuLl890Op2023Default().build<TInventoryEntryDraft>();
    expect(skuLl890Op2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLl890Op2023Default preset when built for graphql`, () => {
    const skuLl890Op2023DefaultPresetGraphql =
      skuLl890Op2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
