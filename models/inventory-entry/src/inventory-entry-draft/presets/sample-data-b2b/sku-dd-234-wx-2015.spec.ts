import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2015 from './sku-dd-234-wx-2015';

describe(`with skuDd234Wx2015 preset`, () => {
  it(`should return a skuDd234Wx2015 preset`, () => {
    const skuDd234Wx2015Preset = skuDd234Wx2015().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2015 preset when built for graphql`, () => {
    const skuDd234Wx2015PresetGraphql =
      skuDd234Wx2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
