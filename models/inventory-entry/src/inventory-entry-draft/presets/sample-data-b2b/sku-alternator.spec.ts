import type { TInventoryEntryDraft } from '../../../types';
import skuAlternator from './sku-alternator';

describe(`with skuAlternator preset`, () => {
  it(`should return a skuAlternator preset`, () => {
    const skuAlternatorPreset = skuAlternator().build<TInventoryEntryDraft>();
    expect(skuAlternatorPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAlternator preset when built for graphql`, () => {
    const skuAlternatorPresetGraphql =
      skuAlternator().buildGraphql<TInventoryEntryDraft>();
    expect(skuAlternatorPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": undefined,
      }
    `);
  });
});
