import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2015 from './sku-f-890-op-2015';

describe(`with skuF890Op2015 preset`, () => {
  it(`should return a skuF890Op2015 preset`, () => {
    const skuF890Op2015Preset = skuF890Op2015().build<TInventoryEntryDraft>();
    expect(skuF890Op2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuF890Op2015 preset when built for graphql`, () => {
    const skuF890Op2015PresetGraphql =
      skuF890Op2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
