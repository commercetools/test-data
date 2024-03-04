import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2023Us from './sku-a789-bc-2023-us';

describe(`with skuA789Bc2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuA789Bc2023Us preset`, () => {
    const skuA789Bc2023UsPreset =
      skuA789Bc2023Us().build<TInventoryEntryDraft>();
    expect(skuA789Bc2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2023Us preset when built for graphql`, () => {
    const skuA789Bc2023UsPresetGraphql =
      skuA789Bc2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
