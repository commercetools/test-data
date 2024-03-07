import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2023Eu from './sku-oo789-uv-2023-eu';

describe(`with skuOo789Uv2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuOo789Uv2023Eu preset`, () => {
    const skuOo789Uv2023EuPreset =
      skuOo789Uv2023Eu().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuOo789Uv2023Eu preset when built for graphql`, () => {
    const skuOo789Uv2023EuPresetGraphql =
      skuOo789Uv2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
