import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2019 from './sku-j-234-wx-2019';

describe(`with skuJ234Wx2019 preset`, () => {
  it(`should return a skuJ234Wx2019 preset`, () => {
    const skuJ234Wx2019Preset = skuJ234Wx2019().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2019 preset when built for graphql`, () => {
    const skuJ234Wx2019PresetGraphql =
      skuJ234Wx2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
