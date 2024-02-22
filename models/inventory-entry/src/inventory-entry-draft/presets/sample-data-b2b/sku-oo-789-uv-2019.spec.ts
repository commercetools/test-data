import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2019 from './sku-oo-789-uv-2019';

describe(`with skuOo789Uv2019 preset`, () => {
  it(`should return a skuOo789Uv2019 preset`, () => {
    const skuOo789Uv2019Preset = skuOo789Uv2019().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2019 preset when built for graphql`, () => {
    const skuOo789Uv2019PresetGraphql =
      skuOo789Uv2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
