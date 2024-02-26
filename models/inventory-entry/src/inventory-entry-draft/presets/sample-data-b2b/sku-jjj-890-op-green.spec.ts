import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpGreen from './sku-jjj-890-op-green';

describe(`with skuJjj890OpGreen preset`, () => {
  it(`should return a skuJjj890OpGreen preset`, () => {
    const skuJjj890OpGreenPreset =
      skuJjj890OpGreen().build<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJjj890OpGreen preset when built for graphql`, () => {
    const skuJjj890OpGreenPresetGraphql =
      skuJjj890OpGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
