import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2015 from './sku-i-789-uv-2015';

describe(`with skuI789Uv2015 preset`, () => {
  it(`should return a skuI789Uv2015 preset`, () => {
    const skuI789Uv2015Preset = skuI789Uv2015().build<TInventoryEntryDraft>();
    expect(skuI789Uv2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2015 preset when built for graphql`, () => {
    const skuI789Uv2015PresetGraphql =
      skuI789Uv2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
