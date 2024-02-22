import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2015 from './sku-rr-890-op-2015';

describe(`with skuRr890Op2015 preset`, () => {
  it(`should return a skuRr890Op2015 preset`, () => {
    const skuRr890Op2015Preset = skuRr890Op2015().build<TInventoryEntryDraft>();
    expect(skuRr890Op2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRr890Op2015 preset when built for graphql`, () => {
    const skuRr890Op2015PresetGraphql =
      skuRr890Op2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
