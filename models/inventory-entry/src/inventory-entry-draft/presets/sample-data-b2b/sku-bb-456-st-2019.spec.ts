import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2019 from './sku-bb-456-st-2019';

describe(`with skuBb456St2019 preset`, () => {
  it(`should return a skuBb456St2019 preset`, () => {
    const skuBb456St2019Preset = skuBb456St2019().build<TInventoryEntryDraft>();
    expect(skuBb456St2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2019 preset when built for graphql`, () => {
    const skuBb456St2019PresetGraphql =
      skuBb456St2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
