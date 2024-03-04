import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2015Eu from './sku-oo789-uv-2015-eu';

describe(`with skuOo789Uv2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuOo789Uv2015Eu preset`, () => {
    const skuOo789Uv2015EuPreset =
      skuOo789Uv2015Eu().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2015Eu preset when built for graphql`, () => {
    const skuOo789Uv2015EuPresetGraphql =
      skuOo789Uv2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
