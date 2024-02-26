import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2015 from './sku-s-567-uv-2015';

describe(`with skuS567Uv2015 preset`, () => {
  it(`should return a skuS567Uv2015 preset`, () => {
    const skuS567Uv2015Preset = skuS567Uv2015().build<TInventoryEntryDraft>();
    expect(skuS567Uv2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2015 preset when built for graphql`, () => {
    const skuS567Uv2015PresetGraphql =
      skuS567Uv2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
