import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2023Us from './sku-bb456-st-2023-us';

describe(`with skuBb456St2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuBb456St2023Us preset`, () => {
    const skuBb456St2023UsPreset =
      skuBb456St2023Us().build<TInventoryEntryDraft>();
    expect(skuBb456St2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2023Us preset when built for graphql`, () => {
    const skuBb456St2023UsPresetGraphql =
      skuBb456St2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
