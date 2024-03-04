import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2023Us from './sku-hh456-st-2023-us';

describe(`with skuHh456St2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuHh456St2023Us preset`, () => {
    const skuHh456St2023UsPreset =
      skuHh456St2023Us().build<TInventoryEntryDraft>();
    expect(skuHh456St2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHh456St2023Us preset when built for graphql`, () => {
    const skuHh456St2023UsPresetGraphql =
      skuHh456St2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
