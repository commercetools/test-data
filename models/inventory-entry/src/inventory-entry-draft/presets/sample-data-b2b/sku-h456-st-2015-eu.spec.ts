import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2015Eu from './sku-h456-st-2015-eu';

describe(`with skuH456St2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuH456St2015Eu preset`, () => {
    const skuH456St2015EuPreset =
      skuH456St2015Eu().build<TInventoryEntryDraft>();
    expect(skuH456St2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuH456St2015Eu preset when built for graphql`, () => {
    const skuH456St2015EuPresetGraphql =
      skuH456St2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
