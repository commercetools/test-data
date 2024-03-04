import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2015Eu from './sku-c789-uv-2015-eu';

describe(`with skuC789Uv2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuC789Uv2015Eu preset`, () => {
    const skuC789Uv2015EuPreset =
      skuC789Uv2015Eu().build<TInventoryEntryDraft>();
    expect(skuC789Uv2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2015Eu preset when built for graphql`, () => {
    const skuC789Uv2015EuPresetGraphql =
      skuC789Uv2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
