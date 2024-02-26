import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2015 from './sku-ee-567-yz-2015';

describe(`with skuEe567Yz2015 preset`, () => {
  it(`should return a skuEe567Yz2015 preset`, () => {
    const skuEe567Yz2015Preset = skuEe567Yz2015().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEe567Yz2015 preset when built for graphql`, () => {
    const skuEe567Yz2015PresetGraphql =
      skuEe567Yz2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
