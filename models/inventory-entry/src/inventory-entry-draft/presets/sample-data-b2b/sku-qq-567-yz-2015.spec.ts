import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2015 from './sku-qq-567-yz-2015';

describe(`with skuQq567Yz2015 preset`, () => {
  it(`should return a skuQq567Yz2015 preset`, () => {
    const skuQq567Yz2015Preset = skuQq567Yz2015().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2015 preset when built for graphql`, () => {
    const skuQq567Yz2015PresetGraphql =
      skuQq567Yz2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
