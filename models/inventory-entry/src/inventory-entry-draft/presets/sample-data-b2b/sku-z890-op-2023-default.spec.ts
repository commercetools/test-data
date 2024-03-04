import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2023Default from './sku-z890-op-2023-default';

describe(`with skuZ890Op2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuZ890Op2023Default preset`, () => {
    const skuZ890Op2023DefaultPreset =
      skuZ890Op2023Default().build<TInventoryEntryDraft>();
    expect(skuZ890Op2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZ890Op2023Default preset when built for graphql`, () => {
    const skuZ890Op2023DefaultPresetGraphql =
      skuZ890Op2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
