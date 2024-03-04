import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2015Default from './sku-bb456-st-2015-default';

describe(`with skuBb456St2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuBb456St2015Default preset`, () => {
    const skuBb456St2015DefaultPreset =
      skuBb456St2015Default().build<TInventoryEntryDraft>();
    expect(skuBb456St2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2015Default preset when built for graphql`, () => {
    const skuBb456St2015DefaultPresetGraphql =
      skuBb456St2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
