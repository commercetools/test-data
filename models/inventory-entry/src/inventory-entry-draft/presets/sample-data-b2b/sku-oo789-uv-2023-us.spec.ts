import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2023Us from './sku-oo789-uv-2023-us';

describe(`with skuOo789Uv2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuOo789Uv2023Us preset`, () => {
    const skuOo789Uv2023UsPreset =
      skuOo789Uv2023Us().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2023Us preset when built for graphql`, () => {
    const skuOo789Uv2023UsPresetGraphql =
      skuOo789Uv2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
