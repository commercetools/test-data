import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2019 from './sku-ff-890-op-2019';

describe(`with skuFf890Op2019 preset`, () => {
  it(`should return a skuFf890Op2019 preset`, () => {
    const skuFf890Op2019Preset = skuFf890Op2019().build<TInventoryEntryDraft>();
    expect(skuFf890Op2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2019 preset when built for graphql`, () => {
    const skuFf890Op2019PresetGraphql =
      skuFf890Op2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
