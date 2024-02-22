import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2023 from './sku-m-890-op-2023';

describe(`with skuM890Op2023 preset`, () => {
  it(`should return a skuM890Op2023 preset`, () => {
    const skuM890Op2023Preset = skuM890Op2023().build<TInventoryEntryDraft>();
    expect(skuM890Op2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2023 preset when built for graphql`, () => {
    const skuM890Op2023PresetGraphql =
      skuM890Op2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
