import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2015Eu from './sku-w789-uv-2015-eu';

describe(`with skuW789Uv2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuW789Uv2015Eu preset`, () => {
    const skuW789Uv2015EuPreset =
      skuW789Uv2015Eu().build<TInventoryEntryDraft>();
    expect(skuW789Uv2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2015Eu preset when built for graphql`, () => {
    const skuW789Uv2015EuPresetGraphql =
      skuW789Uv2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
