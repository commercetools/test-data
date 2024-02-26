import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2023 from './sku-s-567-uv-2023';

describe(`with skuS567Uv2023 preset`, () => {
  it(`should return a skuS567Uv2023 preset`, () => {
    const skuS567Uv2023Preset = skuS567Uv2023().build<TInventoryEntryDraft>();
    expect(skuS567Uv2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2023 preset when built for graphql`, () => {
    const skuS567Uv2023PresetGraphql =
      skuS567Uv2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
