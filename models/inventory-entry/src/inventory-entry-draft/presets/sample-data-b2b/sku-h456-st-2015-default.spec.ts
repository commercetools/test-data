import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2015Default from './sku-h456-st-2015-default';

describe(`with skuH456St2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuH456St2015Default preset`, () => {
    const skuH456St2015DefaultPreset =
      skuH456St2015Default().build<TInventoryEntryDraft>();
    expect(skuH456St2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuH456St2015Default preset when built for graphql`, () => {
    const skuH456St2015DefaultPresetGraphql =
      skuH456St2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
