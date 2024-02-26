import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2015 from './sku-cc-789-uv-2015';

describe(`with skuCc789Uv2015 preset`, () => {
  it(`should return a skuCc789Uv2015 preset`, () => {
    const skuCc789Uv2015Preset = skuCc789Uv2015().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2015 preset when built for graphql`, () => {
    const skuCc789Uv2015PresetGraphql =
      skuCc789Uv2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
