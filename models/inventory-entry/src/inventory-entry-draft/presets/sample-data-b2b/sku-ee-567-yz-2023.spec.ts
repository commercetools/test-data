import type { TInventoryEntryDraft } from '../../../types';
import skuEe567Yz2023 from './sku-ee-567-yz-2023';

describe(`with skuEe567Yz2023 preset`, () => {
  it(`should return a skuEe567Yz2023 preset`, () => {
    const skuEe567Yz2023Preset = skuEe567Yz2023().build<TInventoryEntryDraft>();
    expect(skuEe567Yz2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEe567Yz2023 preset when built for graphql`, () => {
    const skuEe567Yz2023PresetGraphql =
      skuEe567Yz2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuEe567Yz2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
