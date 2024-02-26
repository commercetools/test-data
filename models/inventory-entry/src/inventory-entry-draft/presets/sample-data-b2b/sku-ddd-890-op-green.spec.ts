import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpGreen from './sku-ddd-890-op-green';

describe(`with skuDdd890OpGreen preset`, () => {
  it(`should return a skuDdd890OpGreen preset`, () => {
    const skuDdd890OpGreenPreset =
      skuDdd890OpGreen().build<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpGreen preset when built for graphql`, () => {
    const skuDdd890OpGreenPresetGraphql =
      skuDdd890OpGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
