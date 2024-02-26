import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2019 from './sku-s-567-uv-2019';

describe(`with skuS567Uv2019 preset`, () => {
  it(`should return a skuS567Uv2019 preset`, () => {
    const skuS567Uv2019Preset = skuS567Uv2019().build<TInventoryEntryDraft>();
    expect(skuS567Uv2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2019 preset when built for graphql`, () => {
    const skuS567Uv2019PresetGraphql =
      skuS567Uv2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
