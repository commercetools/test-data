import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2023 from './sku-w-789-uv-2023';

describe(`with skuW789Uv2023 preset`, () => {
  it(`should return a skuW789Uv2023 preset`, () => {
    const skuW789Uv2023Preset = skuW789Uv2023().build<TInventoryEntryDraft>();
    expect(skuW789Uv2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2023 preset when built for graphql`, () => {
    const skuW789Uv2023PresetGraphql =
      skuW789Uv2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
