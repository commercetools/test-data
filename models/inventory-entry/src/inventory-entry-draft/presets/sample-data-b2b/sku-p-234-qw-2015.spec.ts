import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2015 from './sku-p-234-qw-2015';

describe(`with skuP234Qw2015 preset`, () => {
  it(`should return a skuP234Qw2015 preset`, () => {
    const skuP234Qw2015Preset = skuP234Qw2015().build<TInventoryEntryDraft>();
    expect(skuP234Qw2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2015 preset when built for graphql`, () => {
    const skuP234Qw2015PresetGraphql =
      skuP234Qw2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
