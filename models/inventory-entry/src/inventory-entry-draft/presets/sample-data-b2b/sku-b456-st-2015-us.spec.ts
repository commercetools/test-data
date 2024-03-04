import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2015Us from './sku-b456-st-2015-us';

describe(`with skuB456St2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuB456St2015Us preset`, () => {
    const skuB456St2015UsPreset =
      skuB456St2015Us().build<TInventoryEntryDraft>();
    expect(skuB456St2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2015Us preset when built for graphql`, () => {
    const skuB456St2015UsPresetGraphql =
      skuB456St2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
