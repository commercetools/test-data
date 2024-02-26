import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2019 from './sku-w-789-uv-2019';

describe(`with skuW789Uv2019 preset`, () => {
  it(`should return a skuW789Uv2019 preset`, () => {
    const skuW789Uv2019Preset = skuW789Uv2019().build<TInventoryEntryDraft>();
    expect(skuW789Uv2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2019 preset when built for graphql`, () => {
    const skuW789Uv2019PresetGraphql =
      skuW789Uv2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
