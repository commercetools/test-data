import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2023Us from './sku-c789-uv-2023-us';

describe(`with skuC789Uv2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuC789Uv2023Us preset`, () => {
    const skuC789Uv2023UsPreset =
      skuC789Uv2023Us().build<TInventoryEntryDraft>();
    expect(skuC789Uv2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2023Us preset when built for graphql`, () => {
    const skuC789Uv2023UsPresetGraphql =
      skuC789Uv2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
