import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2023Us from './sku-ii789-uv-2023-us';

describe(`with skuIi789Uv2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuIi789Uv2023Us preset`, () => {
    const skuIi789Uv2023UsPreset =
      skuIi789Uv2023Us().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIi789Uv2023Us preset when built for graphql`, () => {
    const skuIi789Uv2023UsPresetGraphql =
      skuIi789Uv2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
