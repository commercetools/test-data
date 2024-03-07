import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2019Eu from './sku-ii789-uv-2019-eu';

describe(`with skuIi789Uv2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuIi789Uv2019Eu preset`, () => {
    const skuIi789Uv2019EuPreset =
      skuIi789Uv2019Eu().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIi789Uv2019Eu preset when built for graphql`, () => {
    const skuIi789Uv2019EuPresetGraphql =
      skuIi789Uv2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
