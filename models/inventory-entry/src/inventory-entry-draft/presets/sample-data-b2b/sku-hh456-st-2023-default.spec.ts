import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2023Default from './sku-hh456-st-2023-default';

describe(`with skuHh456St2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuHh456St2023Default preset`, () => {
    const skuHh456St2023DefaultPreset =
      skuHh456St2023Default().build<TInventoryEntryDraft>();
    expect(skuHh456St2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2023Default preset when built for graphql`, () => {
    const skuHh456St2023DefaultPresetGraphql =
      skuHh456St2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
