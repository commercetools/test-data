import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2019Eu from './sku-w789-uv-2019-eu';

describe(`with skuW789Uv2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuW789Uv2019Eu preset`, () => {
    const skuW789Uv2019EuPreset =
      skuW789Uv2019Eu().build<TInventoryEntryDraft>();
    expect(skuW789Uv2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuW789Uv2019Eu preset when built for graphql`, () => {
    const skuW789Uv2019EuPresetGraphql =
      skuW789Uv2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
