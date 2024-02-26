import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2023 from './sku-jj-234-wx-2023';

describe(`with skuJj234Wx2023 preset`, () => {
  it(`should return a skuJj234Wx2023 preset`, () => {
    const skuJj234Wx2023Preset = skuJj234Wx2023().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2023 preset when built for graphql`, () => {
    const skuJj234Wx2023PresetGraphql =
      skuJj234Wx2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
