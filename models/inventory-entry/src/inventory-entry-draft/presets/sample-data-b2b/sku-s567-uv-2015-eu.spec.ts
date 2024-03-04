import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2015Eu from './sku-s567-uv-2015-eu';

describe(`with skuS567Uv2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuS567Uv2015Eu preset`, () => {
    const skuS567Uv2015EuPreset =
      skuS567Uv2015Eu().build<TInventoryEntryDraft>();
    expect(skuS567Uv2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2015Eu preset when built for graphql`, () => {
    const skuS567Uv2015EuPresetGraphql =
      skuS567Uv2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
