import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2023Eu from './sku-v456-st-2023-eu';

describe(`with skuV456St2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuV456St2023Eu preset`, () => {
    const skuV456St2023EuPreset =
      skuV456St2023Eu().build<TInventoryEntryDraft>();
    expect(skuV456St2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuV456St2023Eu preset when built for graphql`, () => {
    const skuV456St2023EuPresetGraphql =
      skuV456St2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
