import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2015 from './sku-l-890-op-2015';

describe(`with skuL890Op2015 preset`, () => {
  it(`should return a skuL890Op2015 preset`, () => {
    const skuL890Op2015Preset = skuL890Op2015().build<TInventoryEntryDraft>();
    expect(skuL890Op2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuL890Op2015 preset when built for graphql`, () => {
    const skuL890Op2015PresetGraphql =
      skuL890Op2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
