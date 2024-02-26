import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2019 from './sku-dd-234-wx-2019';

describe(`with skuDd234Wx2019 preset`, () => {
  it(`should return a skuDd234Wx2019 preset`, () => {
    const skuDd234Wx2019Preset = skuDd234Wx2019().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2019 preset when built for graphql`, () => {
    const skuDd234Wx2019PresetGraphql =
      skuDd234Wx2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
