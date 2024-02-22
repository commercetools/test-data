import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2015 from './sku-jj-234-wx-2015';

describe(`with skuJj234Wx2015 preset`, () => {
  it(`should return a skuJj234Wx2015 preset`, () => {
    const skuJj234Wx2015Preset = skuJj234Wx2015().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2015 preset when built for graphql`, () => {
    const skuJj234Wx2015PresetGraphql =
      skuJj234Wx2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
