import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2015 from './sku-a-789-bc-2015';

describe(`with skuA789Bc2015 preset`, () => {
  it(`should return a skuA789Bc2015 preset`, () => {
    const skuA789Bc2015Preset = skuA789Bc2015().build<TInventoryEntryDraft>();
    expect(skuA789Bc2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2015 preset when built for graphql`, () => {
    const skuA789Bc2015PresetGraphql =
      skuA789Bc2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
