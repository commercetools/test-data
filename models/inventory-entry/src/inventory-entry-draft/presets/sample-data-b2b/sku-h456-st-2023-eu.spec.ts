import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2023Eu from './sku-h456-st-2023-eu';

describe(`with skuH456St2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuH456St2023Eu preset`, () => {
    const skuH456St2023EuPreset =
      skuH456St2023Eu().build<TInventoryEntryDraft>();
    expect(skuH456St2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2023Eu preset when built for graphql`, () => {
    const skuH456St2023EuPresetGraphql =
      skuH456St2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
