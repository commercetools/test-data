import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2023 from './sku-p-234-qw-2023';

describe(`with skuP234Qw2023 preset`, () => {
  it(`should return a skuP234Qw2023 preset`, () => {
    const skuP234Qw2023Preset = skuP234Qw2023().build<TInventoryEntryDraft>();
    expect(skuP234Qw2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2023 preset when built for graphql`, () => {
    const skuP234Qw2023PresetGraphql =
      skuP234Qw2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
