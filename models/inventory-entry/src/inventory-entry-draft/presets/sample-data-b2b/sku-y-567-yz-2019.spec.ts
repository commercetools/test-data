import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2019 from './sku-y-567-yz-2019';

describe(`with skuY567Yz2019 preset`, () => {
  it(`should return a skuY567Yz2019 preset`, () => {
    const skuY567Yz2019Preset = skuY567Yz2019().build<TInventoryEntryDraft>();
    expect(skuY567Yz2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2019 preset when built for graphql`, () => {
    const skuY567Yz2019PresetGraphql =
      skuY567Yz2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
