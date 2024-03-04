import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2023Default from './sku-rr890-op-2023-default';

describe(`with skuRr890Op2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuRr890Op2023Default preset`, () => {
    const skuRr890Op2023DefaultPreset =
      skuRr890Op2023Default().build<TInventoryEntryDraft>();
    expect(skuRr890Op2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2023Default preset when built for graphql`, () => {
    const skuRr890Op2023DefaultPresetGraphql =
      skuRr890Op2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
