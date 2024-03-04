import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2015Eu from './sku-cc789-uv-2015-eu';

describe(`with skuCc789Uv2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuCc789Uv2015Eu preset`, () => {
    const skuCc789Uv2015EuPreset =
      skuCc789Uv2015Eu().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2015Eu preset when built for graphql`, () => {
    const skuCc789Uv2015EuPresetGraphql =
      skuCc789Uv2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
