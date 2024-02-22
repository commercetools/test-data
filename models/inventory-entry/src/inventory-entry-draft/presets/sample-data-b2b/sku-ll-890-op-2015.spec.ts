import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2015 from './sku-ll-890-op-2015';

describe(`with skuLl890Op2015 preset`, () => {
  it(`should return a skuLl890Op2015 preset`, () => {
    const skuLl890Op2015Preset = skuLl890Op2015().build<TInventoryEntryDraft>();
    expect(skuLl890Op2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2015 preset when built for graphql`, () => {
    const skuLl890Op2015PresetGraphql =
      skuLl890Op2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
