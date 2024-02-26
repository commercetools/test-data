import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2023 from './sku-r-123-ts-2023';

describe(`with skuR123Ts2023 preset`, () => {
  it(`should return a skuR123Ts2023 preset`, () => {
    const skuR123Ts2023Preset = skuR123Ts2023().build<TInventoryEntryDraft>();
    expect(skuR123Ts2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuR123Ts2023 preset when built for graphql`, () => {
    const skuR123Ts2023PresetGraphql =
      skuR123Ts2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
