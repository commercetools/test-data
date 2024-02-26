import type { TInventoryEntryDraft } from '../../../types';
import skuKk567Yz2023 from './sku-kk-567-yz-2023';

describe(`with skuKk567Yz2023 preset`, () => {
  it(`should return a skuKk567Yz2023 preset`, () => {
    const skuKk567Yz2023Preset = skuKk567Yz2023().build<TInventoryEntryDraft>();
    expect(skuKk567Yz2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuKk567Yz2023 preset when built for graphql`, () => {
    const skuKk567Yz2023PresetGraphql =
      skuKk567Yz2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuKk567Yz2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "kk567-yz-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
