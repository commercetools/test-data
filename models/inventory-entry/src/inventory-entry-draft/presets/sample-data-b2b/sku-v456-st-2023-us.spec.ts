import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2023Us from './sku-v456-st-2023-us';

describe(`with skuV456St2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuV456St2023Us preset`, () => {
    const skuV456St2023UsPreset =
      skuV456St2023Us().build<TInventoryEntryDraft>();
    expect(skuV456St2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuV456St2023Us preset when built for graphql`, () => {
    const skuV456St2023UsPresetGraphql =
      skuV456St2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
