import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2023Eu from './sku-cc789-uv-2023-eu';

describe(`with skuCc789Uv2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuCc789Uv2023Eu preset`, () => {
    const skuCc789Uv2023EuPreset =
      skuCc789Uv2023Eu().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2023Eu preset when built for graphql`, () => {
    const skuCc789Uv2023EuPresetGraphql =
      skuCc789Uv2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
