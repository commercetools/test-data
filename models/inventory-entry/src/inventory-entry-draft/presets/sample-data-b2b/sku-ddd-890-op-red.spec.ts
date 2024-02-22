import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpRed from './sku-ddd-890-op-red';

describe(`with skuDdd890OpRed preset`, () => {
  it(`should return a skuDdd890OpRed preset`, () => {
    const skuDdd890OpRedPreset = skuDdd890OpRed().build<TInventoryEntryDraft>();
    expect(skuDdd890OpRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpRed preset when built for graphql`, () => {
    const skuDdd890OpRedPresetGraphql =
      skuDdd890OpRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
