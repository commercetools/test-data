import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2023Us from './sku-f890-op-2023-us';

describe(`with skuF890Op2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuF890Op2023Us preset`, () => {
    const skuF890Op2023UsPreset =
      skuF890Op2023Us().build<TInventoryEntryDraft>();
    expect(skuF890Op2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2023Us preset when built for graphql`, () => {
    const skuF890Op2023UsPresetGraphql =
      skuF890Op2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
