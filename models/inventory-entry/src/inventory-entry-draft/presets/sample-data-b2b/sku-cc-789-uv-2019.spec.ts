import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2019 from './sku-cc-789-uv-2019';

describe(`with skuCc789Uv2019 preset`, () => {
  it(`should return a skuCc789Uv2019 preset`, () => {
    const skuCc789Uv2019Preset = skuCc789Uv2019().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2019 preset when built for graphql`, () => {
    const skuCc789Uv2019PresetGraphql =
      skuCc789Uv2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
