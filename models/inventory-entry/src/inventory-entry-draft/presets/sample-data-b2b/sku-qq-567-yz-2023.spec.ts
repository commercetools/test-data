import type { TInventoryEntryDraft } from '../../../types';
import skuQq567Yz2023 from './sku-qq-567-yz-2023';

describe(`with skuQq567Yz2023 preset`, () => {
  it(`should return a skuQq567Yz2023 preset`, () => {
    const skuQq567Yz2023Preset = skuQq567Yz2023().build<TInventoryEntryDraft>();
    expect(skuQq567Yz2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuQq567Yz2023 preset when built for graphql`, () => {
    const skuQq567Yz2023PresetGraphql =
      skuQq567Yz2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuQq567Yz2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
