import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2023 from './sku-dd-234-wx-2023';

describe(`with skuDd234Wx2023 preset`, () => {
  it(`should return a skuDd234Wx2023 preset`, () => {
    const skuDd234Wx2023Preset = skuDd234Wx2023().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2023 preset when built for graphql`, () => {
    const skuDd234Wx2023PresetGraphql =
      skuDd234Wx2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
