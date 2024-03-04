import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2023Default from './sku-h456-st-2023-default';

describe(`with skuH456St2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuH456St2023Default preset`, () => {
    const skuH456St2023DefaultPreset =
      skuH456St2023Default().build<TInventoryEntryDraft>();
    expect(skuH456St2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2023Default preset when built for graphql`, () => {
    const skuH456St2023DefaultPresetGraphql =
      skuH456St2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
