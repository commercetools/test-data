import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpBlue from './sku-ddd-890-op-blue';

describe(`with skuDdd890OpBlue preset`, () => {
  it(`should return a skuDdd890OpBlue preset`, () => {
    const skuDdd890OpBluePreset =
      skuDdd890OpBlue().build<TInventoryEntryDraft>();
    expect(skuDdd890OpBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpBlue preset when built for graphql`, () => {
    const skuDdd890OpBluePresetGraphql =
      skuDdd890OpBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
