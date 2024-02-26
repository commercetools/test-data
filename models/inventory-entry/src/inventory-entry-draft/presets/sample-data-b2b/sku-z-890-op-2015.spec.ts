import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2015 from './sku-z-890-op-2015';

describe(`with skuZ890Op2015 preset`, () => {
  it(`should return a skuZ890Op2015 preset`, () => {
    const skuZ890Op2015Preset = skuZ890Op2015().build<TInventoryEntryDraft>();
    expect(skuZ890Op2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZ890Op2015 preset when built for graphql`, () => {
    const skuZ890Op2015PresetGraphql =
      skuZ890Op2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
