import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2015Default from './sku-v456-st-2015-default';

describe(`with skuV456St2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuV456St2015Default preset`, () => {
    const skuV456St2015DefaultPreset =
      skuV456St2015Default().build<TInventoryEntryDraft>();
    expect(skuV456St2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2015Default preset when built for graphql`, () => {
    const skuV456St2015DefaultPresetGraphql =
      skuV456St2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
