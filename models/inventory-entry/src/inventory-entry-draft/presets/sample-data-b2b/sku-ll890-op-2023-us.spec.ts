import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2023Us from './sku-ll890-op-2023-us';

describe(`with skuLl890Op2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuLl890Op2023Us preset`, () => {
    const skuLl890Op2023UsPreset =
      skuLl890Op2023Us().build<TInventoryEntryDraft>();
    expect(skuLl890Op2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2023Us preset when built for graphql`, () => {
    const skuLl890Op2023UsPresetGraphql =
      skuLl890Op2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
