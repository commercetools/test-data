import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2023 from './sku-ff-890-op-2023';

describe(`with skuFf890Op2023 preset`, () => {
  it(`should return a skuFf890Op2023 preset`, () => {
    const skuFf890Op2023Preset = skuFf890Op2023().build<TInventoryEntryDraft>();
    expect(skuFf890Op2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2023 preset when built for graphql`, () => {
    const skuFf890Op2023PresetGraphql =
      skuFf890Op2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
