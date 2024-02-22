import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2019 from './sku-l-890-op-2019';

describe(`with skuL890Op2019 preset`, () => {
  it(`should return a skuL890Op2019 preset`, () => {
    const skuL890Op2019Preset = skuL890Op2019().build<TInventoryEntryDraft>();
    expect(skuL890Op2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuL890Op2019 preset when built for graphql`, () => {
    const skuL890Op2019PresetGraphql =
      skuL890Op2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
