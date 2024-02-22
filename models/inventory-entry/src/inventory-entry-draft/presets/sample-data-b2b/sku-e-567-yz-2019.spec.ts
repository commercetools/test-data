import type { TInventoryEntryDraft } from '../../../types';
import skuE567Yz2019 from './sku-e-567-yz-2019';

describe(`with skuE567Yz2019 preset`, () => {
  it(`should return a skuE567Yz2019 preset`, () => {
    const skuE567Yz2019Preset = skuE567Yz2019().build<TInventoryEntryDraft>();
    expect(skuE567Yz2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuE567Yz2019 preset when built for graphql`, () => {
    const skuE567Yz2019PresetGraphql =
      skuE567Yz2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuE567Yz2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
