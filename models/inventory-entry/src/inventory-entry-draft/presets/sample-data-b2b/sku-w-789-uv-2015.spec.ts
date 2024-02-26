import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2015 from './sku-w-789-uv-2015';

describe(`with skuW789Uv2015 preset`, () => {
  it(`should return a skuW789Uv2015 preset`, () => {
    const skuW789Uv2015Preset = skuW789Uv2015().build<TInventoryEntryDraft>();
    expect(skuW789Uv2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2015 preset when built for graphql`, () => {
    const skuW789Uv2015PresetGraphql =
      skuW789Uv2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
