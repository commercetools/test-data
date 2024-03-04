import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2023Us from './sku-i789-uv-2023-us';

describe(`with skuI789Uv2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuI789Uv2023Us preset`, () => {
    const skuI789Uv2023UsPreset =
      skuI789Uv2023Us().build<TInventoryEntryDraft>();
    expect(skuI789Uv2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2023Us preset when built for graphql`, () => {
    const skuI789Uv2023UsPresetGraphql =
      skuI789Uv2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
