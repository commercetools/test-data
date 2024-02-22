import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2015 from './sku-x-234-wx-2015';

describe(`with skuX234Wx2015 preset`, () => {
  it(`should return a skuX234Wx2015 preset`, () => {
    const skuX234Wx2015Preset = skuX234Wx2015().build<TInventoryEntryDraft>();
    expect(skuX234Wx2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2015 preset when built for graphql`, () => {
    const skuX234Wx2015PresetGraphql =
      skuX234Wx2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
