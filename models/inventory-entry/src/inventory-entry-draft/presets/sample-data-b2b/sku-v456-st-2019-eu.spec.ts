import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2019Eu from './sku-v456-st-2019-eu';

describe(`with skuV456St2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuV456St2019Eu preset`, () => {
    const skuV456St2019EuPreset =
      skuV456St2019Eu().build<TInventoryEntryDraft>();
    expect(skuV456St2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2019Eu preset when built for graphql`, () => {
    const skuV456St2019EuPresetGraphql =
      skuV456St2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
