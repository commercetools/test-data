import type { TInventoryEntryDraft } from '../../../types';
import skuA789Bc2023 from './sku-a-789-bc-2023';

describe(`with skuA789Bc2023 preset`, () => {
  it(`should return a skuA789Bc2023 preset`, () => {
    const skuA789Bc2023Preset = skuA789Bc2023().build<TInventoryEntryDraft>();
    expect(skuA789Bc2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuA789Bc2023 preset when built for graphql`, () => {
    const skuA789Bc2023PresetGraphql =
      skuA789Bc2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuA789Bc2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
