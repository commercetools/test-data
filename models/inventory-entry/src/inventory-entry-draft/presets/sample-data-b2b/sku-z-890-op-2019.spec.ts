import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2019 from './sku-z-890-op-2019';

describe(`with skuZ890Op2019 preset`, () => {
  it(`should return a skuZ890Op2019 preset`, () => {
    const skuZ890Op2019Preset = skuZ890Op2019().build<TInventoryEntryDraft>();
    expect(skuZ890Op2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZ890Op2019 preset when built for graphql`, () => {
    const skuZ890Op2019PresetGraphql =
      skuZ890Op2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
