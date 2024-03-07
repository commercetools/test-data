import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2019Eu from './sku-cc789-uv-2019-eu';

describe(`with skuCc789Uv2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuCc789Uv2019Eu preset`, () => {
    const skuCc789Uv2019EuPreset =
      skuCc789Uv2019Eu().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCc789Uv2019Eu preset when built for graphql`, () => {
    const skuCc789Uv2019EuPresetGraphql =
      skuCc789Uv2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
