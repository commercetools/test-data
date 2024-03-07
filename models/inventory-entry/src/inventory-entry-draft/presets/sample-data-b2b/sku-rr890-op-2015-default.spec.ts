import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2015Default from './sku-rr890-op-2015-default';

describe(`with skuRr890Op2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuRr890Op2015Default preset`, () => {
    const skuRr890Op2015DefaultPreset =
      skuRr890Op2015Default().build<TInventoryEntryDraft>();
    expect(skuRr890Op2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2015Default preset when built for graphql`, () => {
    const skuRr890Op2015DefaultPresetGraphql =
      skuRr890Op2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
