import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2019 from './sku-qq-567-yz-2019';

describe(`with skuQq567Yz2019 preset`, () => {
  it(`should return a skuQq567Yz2019 preset`, () => {
    const skuQq567Yz2019Preset = skuQq567Yz2019().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2019 preset when built for graphql`, () => {
    const skuQq567Yz2019PresetGraphql =
      skuQq567Yz2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
