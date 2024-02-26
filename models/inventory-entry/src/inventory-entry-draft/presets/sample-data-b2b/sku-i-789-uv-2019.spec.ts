import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2019 from './sku-i-789-uv-2019';

describe(`with skuI789Uv2019 preset`, () => {
  it(`should return a skuI789Uv2019 preset`, () => {
    const skuI789Uv2019Preset = skuI789Uv2019().build<TInventoryEntryDraft>();
    expect(skuI789Uv2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2019 preset when built for graphql`, () => {
    const skuI789Uv2019PresetGraphql =
      skuI789Uv2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
