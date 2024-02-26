import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2023 from './sku-x-234-wx-2023';

describe(`with skuX234Wx2023 preset`, () => {
  it(`should return a skuX234Wx2023 preset`, () => {
    const skuX234Wx2023Preset = skuX234Wx2023().build<TInventoryEntryDraft>();
    expect(skuX234Wx2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2023 preset when built for graphql`, () => {
    const skuX234Wx2023PresetGraphql =
      skuX234Wx2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
