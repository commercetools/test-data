import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpRed from './sku-jjj-890-op-red';

describe(`with skuJjj890OpRed preset`, () => {
  it(`should return a skuJjj890OpRed preset`, () => {
    const skuJjj890OpRedPreset = skuJjj890OpRed().build<TInventoryEntryDraft>();
    expect(skuJjj890OpRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJjj890OpRed preset when built for graphql`, () => {
    const skuJjj890OpRedPresetGraphql =
      skuJjj890OpRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
