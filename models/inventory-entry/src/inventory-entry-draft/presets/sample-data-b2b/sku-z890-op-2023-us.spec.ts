import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2023Us from './sku-z890-op-2023-us';

describe(`with skuZ890Op2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuZ890Op2023Us preset`, () => {
    const skuZ890Op2023UsPreset =
      skuZ890Op2023Us().build<TInventoryEntryDraft>();
    expect(skuZ890Op2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZ890Op2023Us preset when built for graphql`, () => {
    const skuZ890Op2023UsPresetGraphql =
      skuZ890Op2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
