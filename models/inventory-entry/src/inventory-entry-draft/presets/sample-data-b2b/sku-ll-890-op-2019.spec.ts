import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2019 from './sku-ll-890-op-2019';

describe(`with skuLl890Op2019 preset`, () => {
  it(`should return a skuLl890Op2019 preset`, () => {
    const skuLl890Op2019Preset = skuLl890Op2019().build<TInventoryEntryDraft>();
    expect(skuLl890Op2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2019 preset when built for graphql`, () => {
    const skuLl890Op2019PresetGraphql =
      skuLl890Op2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
