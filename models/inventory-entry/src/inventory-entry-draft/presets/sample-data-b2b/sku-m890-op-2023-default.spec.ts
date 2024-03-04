import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2023Default from './sku-m890-op-2023-default';

describe(`with skuM890Op2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuM890Op2023Default preset`, () => {
    const skuM890Op2023DefaultPreset =
      skuM890Op2023Default().build<TInventoryEntryDraft>();
    expect(skuM890Op2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuM890Op2023Default preset when built for graphql`, () => {
    const skuM890Op2023DefaultPresetGraphql =
      skuM890Op2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
