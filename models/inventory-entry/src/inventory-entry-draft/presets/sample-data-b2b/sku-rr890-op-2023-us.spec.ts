import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2023Us from './sku-rr890-op-2023-us';

describe(`with skuRr890Op2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuRr890Op2023Us preset`, () => {
    const skuRr890Op2023UsPreset =
      skuRr890Op2023Us().build<TInventoryEntryDraft>();
    expect(skuRr890Op2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRr890Op2023Us preset when built for graphql`, () => {
    const skuRr890Op2023UsPresetGraphql =
      skuRr890Op2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
