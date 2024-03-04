import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2019Eu from './sku-c789-uv-2019-eu';

describe(`with skuC789Uv2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuC789Uv2019Eu preset`, () => {
    const skuC789Uv2019EuPreset =
      skuC789Uv2019Eu().build<TInventoryEntryDraft>();
    expect(skuC789Uv2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuC789Uv2019Eu preset when built for graphql`, () => {
    const skuC789Uv2019EuPresetGraphql =
      skuC789Uv2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
