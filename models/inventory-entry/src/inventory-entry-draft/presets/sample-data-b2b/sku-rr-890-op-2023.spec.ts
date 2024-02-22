import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2023 from './sku-rr-890-op-2023';

describe(`with skuRr890Op2023 preset`, () => {
  it(`should return a skuRr890Op2023 preset`, () => {
    const skuRr890Op2023Preset = skuRr890Op2023().build<TInventoryEntryDraft>();
    expect(skuRr890Op2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRr890Op2023 preset when built for graphql`, () => {
    const skuRr890Op2023PresetGraphql =
      skuRr890Op2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
