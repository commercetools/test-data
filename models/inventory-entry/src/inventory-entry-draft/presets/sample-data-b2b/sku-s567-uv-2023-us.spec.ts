import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2023Us from './sku-s567-uv-2023-us';

describe(`with skuS567Uv2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuS567Uv2023Us preset`, () => {
    const skuS567Uv2023UsPreset =
      skuS567Uv2023Us().build<TInventoryEntryDraft>();
    expect(skuS567Uv2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuS567Uv2023Us preset when built for graphql`, () => {
    const skuS567Uv2023UsPresetGraphql =
      skuS567Uv2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
