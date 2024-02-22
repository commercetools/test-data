import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2019 from './sku-a-789-bc-2019';

describe(`with skuA789Bc2019 preset`, () => {
  it(`should return a skuA789Bc2019 preset`, () => {
    const skuA789Bc2019Preset = skuA789Bc2019().build<TInventoryEntryDraft>();
    expect(skuA789Bc2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2019 preset when built for graphql`, () => {
    const skuA789Bc2019PresetGraphql =
      skuA789Bc2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
