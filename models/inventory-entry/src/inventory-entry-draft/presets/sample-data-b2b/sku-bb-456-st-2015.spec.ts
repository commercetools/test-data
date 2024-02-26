import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2015 from './sku-bb-456-st-2015';

describe(`with skuBb456St2015 preset`, () => {
  it(`should return a skuBb456St2015 preset`, () => {
    const skuBb456St2015Preset = skuBb456St2015().build<TInventoryEntryDraft>();
    expect(skuBb456St2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2015 preset when built for graphql`, () => {
    const skuBb456St2015PresetGraphql =
      skuBb456St2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
