import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2019Default from './sku-bb456-st-2019-default';

describe(`with skuBb456St2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuBb456St2019Default preset`, () => {
    const skuBb456St2019DefaultPreset =
      skuBb456St2019Default().build<TInventoryEntryDraft>();
    expect(skuBb456St2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2019Default preset when built for graphql`, () => {
    const skuBb456St2019DefaultPresetGraphql =
      skuBb456St2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
