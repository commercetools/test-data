import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2019 from './sku-p-234-qw-2019';

describe(`with skuP234Qw2019 preset`, () => {
  it(`should return a skuP234Qw2019 preset`, () => {
    const skuP234Qw2019Preset = skuP234Qw2019().build<TInventoryEntryDraft>();
    expect(skuP234Qw2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2019 preset when built for graphql`, () => {
    const skuP234Qw2019PresetGraphql =
      skuP234Qw2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
