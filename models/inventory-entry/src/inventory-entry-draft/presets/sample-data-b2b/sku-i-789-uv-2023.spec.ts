import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2023 from './sku-i-789-uv-2023';

describe(`with skuI789Uv2023 preset`, () => {
  it(`should return a skuI789Uv2023 preset`, () => {
    const skuI789Uv2023Preset = skuI789Uv2023().build<TInventoryEntryDraft>();
    expect(skuI789Uv2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2023 preset when built for graphql`, () => {
    const skuI789Uv2023PresetGraphql =
      skuI789Uv2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
