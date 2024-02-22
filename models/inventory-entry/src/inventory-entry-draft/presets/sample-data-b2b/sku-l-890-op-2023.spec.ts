import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2023 from './sku-l-890-op-2023';

describe(`with skuL890Op2023 preset`, () => {
  it(`should return a skuL890Op2023 preset`, () => {
    const skuL890Op2023Preset = skuL890Op2023().build<TInventoryEntryDraft>();
    expect(skuL890Op2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuL890Op2023 preset when built for graphql`, () => {
    const skuL890Op2023PresetGraphql =
      skuL890Op2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
