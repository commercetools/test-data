import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2019Eu from './sku-i789-uv-2019-eu';

describe(`with skuI789Uv2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuI789Uv2019Eu preset`, () => {
    const skuI789Uv2019EuPreset =
      skuI789Uv2019Eu().build<TInventoryEntryDraft>();
    expect(skuI789Uv2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2019Eu preset when built for graphql`, () => {
    const skuI789Uv2019EuPresetGraphql =
      skuI789Uv2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
