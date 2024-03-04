import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2023Us from './sku-ff890-op-2023-us';

describe(`with skuFf890Op2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuFf890Op2023Us preset`, () => {
    const skuFf890Op2023UsPreset =
      skuFf890Op2023Us().build<TInventoryEntryDraft>();
    expect(skuFf890Op2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2023Us preset when built for graphql`, () => {
    const skuFf890Op2023UsPresetGraphql =
      skuFf890Op2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
