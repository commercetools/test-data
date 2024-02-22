import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2023 from './sku-cc-789-uv-2023';

describe(`with skuCc789Uv2023 preset`, () => {
  it(`should return a skuCc789Uv2023 preset`, () => {
    const skuCc789Uv2023Preset = skuCc789Uv2023().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2023 preset when built for graphql`, () => {
    const skuCc789Uv2023PresetGraphql =
      skuCc789Uv2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
