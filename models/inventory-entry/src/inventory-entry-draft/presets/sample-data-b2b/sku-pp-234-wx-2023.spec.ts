import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2023 from './sku-pp-234-wx-2023';

describe(`with skuPp234Wx2023 preset`, () => {
  it(`should return a skuPp234Wx2023 preset`, () => {
    const skuPp234Wx2023Preset = skuPp234Wx2023().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2023 preset when built for graphql`, () => {
    const skuPp234Wx2023PresetGraphql =
      skuPp234Wx2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
