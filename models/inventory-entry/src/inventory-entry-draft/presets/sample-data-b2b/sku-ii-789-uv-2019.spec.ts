import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2019 from './sku-ii-789-uv-2019';

describe(`with skuIi789Uv2019 preset`, () => {
  it(`should return a skuIi789Uv2019 preset`, () => {
    const skuIi789Uv2019Preset = skuIi789Uv2019().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIi789Uv2019 preset when built for graphql`, () => {
    const skuIi789Uv2019PresetGraphql =
      skuIi789Uv2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
