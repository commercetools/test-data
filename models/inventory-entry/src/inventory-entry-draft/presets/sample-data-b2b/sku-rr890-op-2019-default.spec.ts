import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2019Default from './sku-rr890-op-2019-default';

describe(`with skuRr890Op2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuRr890Op2019Default preset`, () => {
    const skuRr890Op2019DefaultPreset =
      skuRr890Op2019Default().build<TInventoryEntryDraft>();
    expect(skuRr890Op2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2019Default preset when built for graphql`, () => {
    const skuRr890Op2019DefaultPresetGraphql =
      skuRr890Op2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
