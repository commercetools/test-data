import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2019 from './sku-ee-567-yz-2019';

describe(`with skuEe567Yz2019 preset`, () => {
  it(`should return a skuEe567Yz2019 preset`, () => {
    const skuEe567Yz2019Preset = skuEe567Yz2019().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEe567Yz2019 preset when built for graphql`, () => {
    const skuEe567Yz2019PresetGraphql =
      skuEe567Yz2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
