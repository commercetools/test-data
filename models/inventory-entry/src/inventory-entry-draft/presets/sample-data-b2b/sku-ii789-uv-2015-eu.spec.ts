import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2015Eu from './sku-ii789-uv-2015-eu';

describe(`with skuIi789Uv2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuIi789Uv2015Eu preset`, () => {
    const skuIi789Uv2015EuPreset =
      skuIi789Uv2015Eu().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIi789Uv2015Eu preset when built for graphql`, () => {
    const skuIi789Uv2015EuPresetGraphql =
      skuIi789Uv2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
