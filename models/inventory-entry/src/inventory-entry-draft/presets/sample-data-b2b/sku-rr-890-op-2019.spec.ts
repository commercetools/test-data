import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2019 from './sku-rr-890-op-2019';

describe(`with skuRr890Op2019 preset`, () => {
  it(`should return a skuRr890Op2019 preset`, () => {
    const skuRr890Op2019Preset = skuRr890Op2019().build<TInventoryEntryDraft>();
    expect(skuRr890Op2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRr890Op2019 preset when built for graphql`, () => {
    const skuRr890Op2019PresetGraphql =
      skuRr890Op2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
