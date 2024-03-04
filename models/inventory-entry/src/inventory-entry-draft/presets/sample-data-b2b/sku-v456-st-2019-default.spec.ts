import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2019Default from './sku-v456-st-2019-default';

describe(`with skuV456St2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuV456St2019Default preset`, () => {
    const skuV456St2019DefaultPreset =
      skuV456St2019Default().build<TInventoryEntryDraft>();
    expect(skuV456St2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2019Default preset when built for graphql`, () => {
    const skuV456St2019DefaultPresetGraphql =
      skuV456St2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
