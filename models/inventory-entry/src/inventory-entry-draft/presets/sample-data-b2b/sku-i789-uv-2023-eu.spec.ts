import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2023Eu from './sku-i789-uv-2023-eu';

describe(`with skuI789Uv2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuI789Uv2023Eu preset`, () => {
    const skuI789Uv2023EuPreset =
      skuI789Uv2023Eu().build<TInventoryEntryDraft>();
    expect(skuI789Uv2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2023Eu preset when built for graphql`, () => {
    const skuI789Uv2023EuPresetGraphql =
      skuI789Uv2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
