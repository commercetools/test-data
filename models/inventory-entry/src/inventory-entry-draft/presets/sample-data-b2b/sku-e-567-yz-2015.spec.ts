import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2015 from './sku-e-567-yz-2015';

describe(`with skuE567Yz2015 preset`, () => {
  it(`should return a skuE567Yz2015 preset`, () => {
    const skuE567Yz2015Preset = skuE567Yz2015().build<TInventoryEntryDraft>();
    expect(skuE567Yz2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2015 preset when built for graphql`, () => {
    const skuE567Yz2015PresetGraphql =
      skuE567Yz2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
