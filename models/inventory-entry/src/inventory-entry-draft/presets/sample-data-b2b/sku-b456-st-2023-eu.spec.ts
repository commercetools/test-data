import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2023Eu from './sku-b456-st-2023-eu';

describe(`with skuB456St2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuB456St2023Eu preset`, () => {
    const skuB456St2023EuPreset =
      skuB456St2023Eu().build<TInventoryEntryDraft>();
    expect(skuB456St2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2023Eu preset when built for graphql`, () => {
    const skuB456St2023EuPresetGraphql =
      skuB456St2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "b456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
