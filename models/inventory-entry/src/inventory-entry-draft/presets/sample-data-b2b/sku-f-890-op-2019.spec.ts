import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2019 from './sku-f-890-op-2019';

describe(`with skuF890Op2019 preset`, () => {
  it(`should return a skuF890Op2019 preset`, () => {
    const skuF890Op2019Preset = skuF890Op2019().build<TInventoryEntryDraft>();
    expect(skuF890Op2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuF890Op2019 preset when built for graphql`, () => {
    const skuF890Op2019PresetGraphql =
      skuF890Op2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
