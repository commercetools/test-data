import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2023 from './sku-j-234-wx-2023';

describe(`with skuJ234Wx2023 preset`, () => {
  it(`should return a skuJ234Wx2023 preset`, () => {
    const skuJ234Wx2023Preset = skuJ234Wx2023().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2023 preset when built for graphql`, () => {
    const skuJ234Wx2023PresetGraphql =
      skuJ234Wx2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
