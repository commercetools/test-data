import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2015Eu from './sku-v456-st-2015-eu';

describe(`with skuV456St2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuV456St2015Eu preset`, () => {
    const skuV456St2015EuPreset =
      skuV456St2015Eu().build<TInventoryEntryDraft>();
    expect(skuV456St2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuV456St2015Eu preset when built for graphql`, () => {
    const skuV456St2015EuPresetGraphql =
      skuV456St2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
