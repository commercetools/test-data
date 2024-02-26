import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2015 from './sku-kk-567-yz-2015';

describe(`with skuKk567Yz2015 preset`, () => {
  it(`should return a skuKk567Yz2015 preset`, () => {
    const skuKk567Yz2015Preset = skuKk567Yz2015().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuKk567Yz2015 preset when built for graphql`, () => {
    const skuKk567Yz2015PresetGraphql =
      skuKk567Yz2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
