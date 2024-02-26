import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2023 from './sku-f-890-op-2023';

describe(`with skuF890Op2023 preset`, () => {
  it(`should return a skuF890Op2023 preset`, () => {
    const skuF890Op2023Preset = skuF890Op2023().build<TInventoryEntryDraft>();
    expect(skuF890Op2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuF890Op2023 preset when built for graphql`, () => {
    const skuF890Op2023PresetGraphql =
      skuF890Op2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
