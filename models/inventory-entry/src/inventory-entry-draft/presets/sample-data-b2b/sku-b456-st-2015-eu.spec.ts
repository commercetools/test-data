import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2015Eu from './sku-b456-st-2015-eu';

describe(`with skuB456St2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuB456St2015Eu preset`, () => {
    const skuB456St2015EuPreset =
      skuB456St2015Eu().build<TInventoryEntryDraft>();
    expect(skuB456St2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2015Eu preset when built for graphql`, () => {
    const skuB456St2015EuPresetGraphql =
      skuB456St2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
