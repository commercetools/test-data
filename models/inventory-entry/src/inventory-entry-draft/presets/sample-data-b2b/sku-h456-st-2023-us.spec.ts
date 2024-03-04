import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2023Us from './sku-h456-st-2023-us';

describe(`with skuH456St2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuH456St2023Us preset`, () => {
    const skuH456St2023UsPreset =
      skuH456St2023Us().build<TInventoryEntryDraft>();
    expect(skuH456St2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2023Us preset when built for graphql`, () => {
    const skuH456St2023UsPresetGraphql =
      skuH456St2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
