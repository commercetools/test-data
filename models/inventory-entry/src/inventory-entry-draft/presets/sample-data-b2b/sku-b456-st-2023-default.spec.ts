import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2023Default from './sku-b456-st-2023-default';

describe(`with skuB456St2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuB456St2023Default preset`, () => {
    const skuB456St2023DefaultPreset =
      skuB456St2023Default().build<TInventoryEntryDraft>();
    expect(skuB456St2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2023Default preset when built for graphql`, () => {
    const skuB456St2023DefaultPresetGraphql =
      skuB456St2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
