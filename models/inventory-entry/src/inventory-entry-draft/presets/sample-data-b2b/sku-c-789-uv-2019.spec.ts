import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2019 from './sku-c-789-uv-2019';

describe(`with skuC789Uv2019 preset`, () => {
  it(`should return a skuC789Uv2019 preset`, () => {
    const skuC789Uv2019Preset = skuC789Uv2019().build<TInventoryEntryDraft>();
    expect(skuC789Uv2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuC789Uv2019 preset when built for graphql`, () => {
    const skuC789Uv2019PresetGraphql =
      skuC789Uv2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
