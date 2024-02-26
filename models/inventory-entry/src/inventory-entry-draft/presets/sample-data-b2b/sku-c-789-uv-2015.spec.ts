import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2015 from './sku-c-789-uv-2015';

describe(`with skuC789Uv2015 preset`, () => {
  it(`should return a skuC789Uv2015 preset`, () => {
    const skuC789Uv2015Preset = skuC789Uv2015().build<TInventoryEntryDraft>();
    expect(skuC789Uv2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuC789Uv2015 preset when built for graphql`, () => {
    const skuC789Uv2015PresetGraphql =
      skuC789Uv2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
