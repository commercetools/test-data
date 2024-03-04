import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2019Us from './sku-b456-st-2019-us';

describe(`with skuB456St2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuB456St2019Us preset`, () => {
    const skuB456St2019UsPreset =
      skuB456St2019Us().build<TInventoryEntryDraft>();
    expect(skuB456St2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuB456St2019Us preset when built for graphql`, () => {
    const skuB456St2019UsPresetGraphql =
      skuB456St2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
