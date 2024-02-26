import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2015 from './sku-ii-789-uv-2015';

describe(`with skuIi789Uv2015 preset`, () => {
  it(`should return a skuIi789Uv2015 preset`, () => {
    const skuIi789Uv2015Preset = skuIi789Uv2015().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIi789Uv2015 preset when built for graphql`, () => {
    const skuIi789Uv2015PresetGraphql =
      skuIi789Uv2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
