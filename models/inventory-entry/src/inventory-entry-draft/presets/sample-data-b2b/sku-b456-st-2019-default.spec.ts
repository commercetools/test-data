import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2019Default from './sku-b456-st-2019-default';

describe(`with skuB456St2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuB456St2019Default preset`, () => {
    const skuB456St2019DefaultPreset =
      skuB456St2019Default().build<TInventoryEntryDraft>();
    expect(skuB456St2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuB456St2019Default preset when built for graphql`, () => {
    const skuB456St2019DefaultPresetGraphql =
      skuB456St2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
