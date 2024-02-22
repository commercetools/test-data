import type { TInventoryEntryDraft } from '../../../types';
import skuY567Yz2015 from './sku-y-567-yz-2015';

describe(`with skuY567Yz2015 preset`, () => {
  it(`should return a skuY567Yz2015 preset`, () => {
    const skuY567Yz2015Preset = skuY567Yz2015().build<TInventoryEntryDraft>();
    expect(skuY567Yz2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuY567Yz2015 preset when built for graphql`, () => {
    const skuY567Yz2015PresetGraphql =
      skuY567Yz2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuY567Yz2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "y567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
