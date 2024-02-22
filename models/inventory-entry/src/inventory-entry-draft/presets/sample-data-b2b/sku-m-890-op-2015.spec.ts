import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2015 from './sku-m-890-op-2015';

describe(`with skuM890Op2015 preset`, () => {
  it(`should return a skuM890Op2015 preset`, () => {
    const skuM890Op2015Preset = skuM890Op2015().build<TInventoryEntryDraft>();
    expect(skuM890Op2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2015 preset when built for graphql`, () => {
    const skuM890Op2015PresetGraphql =
      skuM890Op2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
