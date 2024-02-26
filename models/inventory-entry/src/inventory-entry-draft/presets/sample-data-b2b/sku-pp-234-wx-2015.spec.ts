import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2015 from './sku-pp-234-wx-2015';

describe(`with skuPp234Wx2015 preset`, () => {
  it(`should return a skuPp234Wx2015 preset`, () => {
    const skuPp234Wx2015Preset = skuPp234Wx2015().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2015 preset when built for graphql`, () => {
    const skuPp234Wx2015PresetGraphql =
      skuPp234Wx2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
