import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2023Default from './sku-v456-st-2023-default';

describe(`with skuV456St2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuV456St2023Default preset`, () => {
    const skuV456St2023DefaultPreset =
      skuV456St2023Default().build<TInventoryEntryDraft>();
    expect(skuV456St2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2023Default preset when built for graphql`, () => {
    const skuV456St2023DefaultPresetGraphql =
      skuV456St2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
