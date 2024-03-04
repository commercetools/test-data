import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2023Us from './sku-m890-op-2023-us';

describe(`with skuM890Op2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuM890Op2023Us preset`, () => {
    const skuM890Op2023UsPreset =
      skuM890Op2023Us().build<TInventoryEntryDraft>();
    expect(skuM890Op2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2023Us preset when built for graphql`, () => {
    const skuM890Op2023UsPresetGraphql =
      skuM890Op2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
