import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2023Us from './sku-l890-op-2023-us';

describe(`with skuL890Op2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuL890Op2023Us preset`, () => {
    const skuL890Op2023UsPreset =
      skuL890Op2023Us().build<TInventoryEntryDraft>();
    expect(skuL890Op2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2023Us preset when built for graphql`, () => {
    const skuL890Op2023UsPresetGraphql =
      skuL890Op2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
