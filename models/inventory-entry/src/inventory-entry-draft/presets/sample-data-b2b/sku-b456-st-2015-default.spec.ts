import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2015Default from './sku-b456-st-2015-default';

describe(`with skuB456St2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuB456St2015Default preset`, () => {
    const skuB456St2015DefaultPreset =
      skuB456St2015Default().build<TInventoryEntryDraft>();
    expect(skuB456St2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuB456St2015Default preset when built for graphql`, () => {
    const skuB456St2015DefaultPresetGraphql =
      skuB456St2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
