import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2019 from './sku-r-123-ts-2019';

describe(`with skuR123Ts2019 preset`, () => {
  it(`should return a skuR123Ts2019 preset`, () => {
    const skuR123Ts2019Preset = skuR123Ts2019().build<TInventoryEntryDraft>();
    expect(skuR123Ts2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuR123Ts2019 preset when built for graphql`, () => {
    const skuR123Ts2019PresetGraphql =
      skuR123Ts2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
