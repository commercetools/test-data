import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2019 from './sku-kk-567-yz-2019';

describe(`with skuKk567Yz2019 preset`, () => {
  it(`should return a skuKk567Yz2019 preset`, () => {
    const skuKk567Yz2019Preset = skuKk567Yz2019().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuKk567Yz2019 preset when built for graphql`, () => {
    const skuKk567Yz2019PresetGraphql =
      skuKk567Yz2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
