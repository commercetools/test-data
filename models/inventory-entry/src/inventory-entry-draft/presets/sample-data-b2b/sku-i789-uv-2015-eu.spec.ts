import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2015Eu from './sku-i789-uv-2015-eu';

describe(`with skuI789Uv2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuI789Uv2015Eu preset`, () => {
    const skuI789Uv2015EuPreset =
      skuI789Uv2015Eu().build<TInventoryEntryDraft>();
    expect(skuI789Uv2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2015Eu preset when built for graphql`, () => {
    const skuI789Uv2015EuPresetGraphql =
      skuI789Uv2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
