import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2023Eu from './sku-pp234-wx-2023-eu';

describe(`with skuPp234Wx2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuPp234Wx2023Eu preset`, () => {
    const skuPp234Wx2023EuPreset =
      skuPp234Wx2023Eu().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2023Eu preset when built for graphql`, () => {
    const skuPp234Wx2023EuPresetGraphql =
      skuPp234Wx2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
