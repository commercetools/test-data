import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2023Us from './sku-b456-st-2023-us';

describe(`with skuB456St2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuB456St2023Us preset`, () => {
    const skuB456St2023UsPreset =
      skuB456St2023Us().build<TInventoryEntryDraft>();
    expect(skuB456St2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2023Us preset when built for graphql`, () => {
    const skuB456St2023UsPresetGraphql =
      skuB456St2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
