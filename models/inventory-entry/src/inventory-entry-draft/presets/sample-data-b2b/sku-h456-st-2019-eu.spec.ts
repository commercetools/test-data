import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2019Eu from './sku-h456-st-2019-eu';

describe(`with skuH456St2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuH456St2019Eu preset`, () => {
    const skuH456St2019EuPreset =
      skuH456St2019Eu().build<TInventoryEntryDraft>();
    expect(skuH456St2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuH456St2019Eu preset when built for graphql`, () => {
    const skuH456St2019EuPresetGraphql =
      skuH456St2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
