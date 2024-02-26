import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2023 from './sku-oo-789-uv-2023';

describe(`with skuOo789Uv2023 preset`, () => {
  it(`should return a skuOo789Uv2023 preset`, () => {
    const skuOo789Uv2023Preset = skuOo789Uv2023().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2023 preset when built for graphql`, () => {
    const skuOo789Uv2023PresetGraphql =
      skuOo789Uv2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
