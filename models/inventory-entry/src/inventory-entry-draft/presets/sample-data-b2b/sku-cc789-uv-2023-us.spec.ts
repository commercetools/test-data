import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2023Us from './sku-cc789-uv-2023-us';

describe(`with skuCc789Uv2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuCc789Uv2023Us preset`, () => {
    const skuCc789Uv2023UsPreset =
      skuCc789Uv2023Us().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCc789Uv2023Us preset when built for graphql`, () => {
    const skuCc789Uv2023UsPresetGraphql =
      skuCc789Uv2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
