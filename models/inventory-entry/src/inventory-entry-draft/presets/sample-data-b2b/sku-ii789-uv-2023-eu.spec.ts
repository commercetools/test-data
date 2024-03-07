import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2023Eu from './sku-ii789-uv-2023-eu';

describe(`with skuIi789Uv2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuIi789Uv2023Eu preset`, () => {
    const skuIi789Uv2023EuPreset =
      skuIi789Uv2023Eu().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIi789Uv2023Eu preset when built for graphql`, () => {
    const skuIi789Uv2023EuPresetGraphql =
      skuIi789Uv2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
