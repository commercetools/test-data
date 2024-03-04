import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2019Default from './sku-hh456-st-2019-default';

describe(`with skuHh456St2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuHh456St2019Default preset`, () => {
    const skuHh456St2019DefaultPreset =
      skuHh456St2019Default().build<TInventoryEntryDraft>();
    expect(skuHh456St2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2019Default preset when built for graphql`, () => {
    const skuHh456St2019DefaultPresetGraphql =
      skuHh456St2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
