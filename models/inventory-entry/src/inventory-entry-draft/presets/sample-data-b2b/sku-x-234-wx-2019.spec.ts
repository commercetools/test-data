import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2019 from './sku-x-234-wx-2019';

describe(`with skuX234Wx2019 preset`, () => {
  it(`should return a skuX234Wx2019 preset`, () => {
    const skuX234Wx2019Preset = skuX234Wx2019().build<TInventoryEntryDraft>();
    expect(skuX234Wx2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2019 preset when built for graphql`, () => {
    const skuX234Wx2019PresetGraphql =
      skuX234Wx2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
