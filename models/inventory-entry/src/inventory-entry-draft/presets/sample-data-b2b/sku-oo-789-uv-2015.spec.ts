import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2015 from './sku-oo-789-uv-2015';

describe(`with skuOo789Uv2015 preset`, () => {
  it(`should return a skuOo789Uv2015 preset`, () => {
    const skuOo789Uv2015Preset = skuOo789Uv2015().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2015 preset when built for graphql`, () => {
    const skuOo789Uv2015PresetGraphql =
      skuOo789Uv2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
