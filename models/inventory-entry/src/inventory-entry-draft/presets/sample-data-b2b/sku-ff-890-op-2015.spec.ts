import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2015 from './sku-ff-890-op-2015';

describe(`with skuFf890Op2015 preset`, () => {
  it(`should return a skuFf890Op2015 preset`, () => {
    const skuFf890Op2015Preset = skuFf890Op2015().build<TInventoryEntryDraft>();
    expect(skuFf890Op2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2015 preset when built for graphql`, () => {
    const skuFf890Op2015PresetGraphql =
      skuFf890Op2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
