import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2015 from './sku-r-123-ts-2015';

describe(`with skuR123Ts2015 preset`, () => {
  it(`should return a skuR123Ts2015 preset`, () => {
    const skuR123Ts2015Preset = skuR123Ts2015().build<TInventoryEntryDraft>();
    expect(skuR123Ts2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuR123Ts2015 preset when built for graphql`, () => {
    const skuR123Ts2015PresetGraphql =
      skuR123Ts2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
