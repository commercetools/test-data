import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2019 from './sku-jj-234-wx-2019';

describe(`with skuJj234Wx2019 preset`, () => {
  it(`should return a skuJj234Wx2019 preset`, () => {
    const skuJj234Wx2019Preset = skuJj234Wx2019().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2019 preset when built for graphql`, () => {
    const skuJj234Wx2019PresetGraphql =
      skuJj234Wx2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
