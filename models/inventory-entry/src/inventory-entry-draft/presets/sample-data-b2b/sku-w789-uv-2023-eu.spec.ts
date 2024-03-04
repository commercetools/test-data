import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2023Eu from './sku-w789-uv-2023-eu';

describe(`with skuW789Uv2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuW789Uv2023Eu preset`, () => {
    const skuW789Uv2023EuPreset =
      skuW789Uv2023Eu().build<TInventoryEntryDraft>();
    expect(skuW789Uv2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuW789Uv2023Eu preset when built for graphql`, () => {
    const skuW789Uv2023EuPresetGraphql =
      skuW789Uv2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
