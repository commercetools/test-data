import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2019Eu from './sku-b456-st-2019-eu';

describe(`with skuB456St2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuB456St2019Eu preset`, () => {
    const skuB456St2019EuPreset =
      skuB456St2019Eu().build<TInventoryEntryDraft>();
    expect(skuB456St2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuB456St2019Eu preset when built for graphql`, () => {
    const skuB456St2019EuPresetGraphql =
      skuB456St2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
