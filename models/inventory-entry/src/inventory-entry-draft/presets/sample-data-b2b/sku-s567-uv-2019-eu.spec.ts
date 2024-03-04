import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2019Eu from './sku-s567-uv-2019-eu';

describe(`with skuS567Uv2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuS567Uv2019Eu preset`, () => {
    const skuS567Uv2019EuPreset =
      skuS567Uv2019Eu().build<TInventoryEntryDraft>();
    expect(skuS567Uv2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2019Eu preset when built for graphql`, () => {
    const skuS567Uv2019EuPresetGraphql =
      skuS567Uv2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
