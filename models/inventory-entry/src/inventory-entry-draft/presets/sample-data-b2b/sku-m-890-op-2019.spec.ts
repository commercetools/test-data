import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2019 from './sku-m-890-op-2019';

describe(`with skuM890Op2019 preset`, () => {
  it(`should return a skuM890Op2019 preset`, () => {
    const skuM890Op2019Preset = skuM890Op2019().build<TInventoryEntryDraft>();
    expect(skuM890Op2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2019 preset when built for graphql`, () => {
    const skuM890Op2019PresetGraphql =
      skuM890Op2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
