import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2023Eu from './sku-s567-uv-2023-eu';

describe(`with skuS567Uv2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuS567Uv2023Eu preset`, () => {
    const skuS567Uv2023EuPreset =
      skuS567Uv2023Eu().build<TInventoryEntryDraft>();
    expect(skuS567Uv2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2023Eu preset when built for graphql`, () => {
    const skuS567Uv2023EuPresetGraphql =
      skuS567Uv2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
