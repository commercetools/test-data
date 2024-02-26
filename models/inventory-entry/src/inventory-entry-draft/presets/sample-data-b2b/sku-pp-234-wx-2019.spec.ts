import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2019 from './sku-pp-234-wx-2019';

describe(`with skuPp234Wx2019 preset`, () => {
  it(`should return a skuPp234Wx2019 preset`, () => {
    const skuPp234Wx2019Preset = skuPp234Wx2019().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2019 preset when built for graphql`, () => {
    const skuPp234Wx2019PresetGraphql =
      skuPp234Wx2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
