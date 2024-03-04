import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2019Default from './sku-h456-st-2019-default';

describe(`with skuH456St2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuH456St2019Default preset`, () => {
    const skuH456St2019DefaultPreset =
      skuH456St2019Default().build<TInventoryEntryDraft>();
    expect(skuH456St2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2019Default preset when built for graphql`, () => {
    const skuH456St2019DefaultPresetGraphql =
      skuH456St2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
