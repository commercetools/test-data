import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2023 from './sku-c-789-uv-2023';

describe(`with skuC789Uv2023 preset`, () => {
  it(`should return a skuC789Uv2023 preset`, () => {
    const skuC789Uv2023Preset = skuC789Uv2023().build<TInventoryEntryDraft>();
    expect(skuC789Uv2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuC789Uv2023 preset when built for graphql`, () => {
    const skuC789Uv2023PresetGraphql =
      skuC789Uv2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
