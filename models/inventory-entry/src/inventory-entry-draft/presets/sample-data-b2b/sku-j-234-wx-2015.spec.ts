import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2015 from './sku-j-234-wx-2015';

describe(`with skuJ234Wx2015 preset`, () => {
  it(`should return a skuJ234Wx2015 preset`, () => {
    const skuJ234Wx2015Preset = skuJ234Wx2015().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2015 preset when built for graphql`, () => {
    const skuJ234Wx2015PresetGraphql =
      skuJ234Wx2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
