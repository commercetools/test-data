import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2015Default from './sku-hh456-st-2015-default';

describe(`with skuHh456St2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuHh456St2015Default preset`, () => {
    const skuHh456St2015DefaultPreset =
      skuHh456St2015Default().build<TInventoryEntryDraft>();
    expect(skuHh456St2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHh456St2015Default preset when built for graphql`, () => {
    const skuHh456St2015DefaultPresetGraphql =
      skuHh456St2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
