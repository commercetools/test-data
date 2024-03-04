import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2023Eu from './sku-c789-uv-2023-eu';

describe(`with skuC789Uv2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuC789Uv2023Eu preset`, () => {
    const skuC789Uv2023EuPreset =
      skuC789Uv2023Eu().build<TInventoryEntryDraft>();
    expect(skuC789Uv2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2023Eu preset when built for graphql`, () => {
    const skuC789Uv2023EuPresetGraphql =
      skuC789Uv2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
