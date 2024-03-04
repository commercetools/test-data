import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2019Eu from './sku-oo789-uv-2019-eu';

describe(`with skuOo789Uv2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuOo789Uv2019Eu preset`, () => {
    const skuOo789Uv2019EuPreset =
      skuOo789Uv2019Eu().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2019Eu preset when built for graphql`, () => {
    const skuOo789Uv2019EuPresetGraphql =
      skuOo789Uv2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
