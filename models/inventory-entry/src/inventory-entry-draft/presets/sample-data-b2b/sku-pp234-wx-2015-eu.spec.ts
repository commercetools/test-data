import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2015Eu from './sku-pp234-wx-2015-eu';

describe(`with skuPp234Wx2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuPp234Wx2015Eu preset`, () => {
    const skuPp234Wx2015EuPreset =
      skuPp234Wx2015Eu().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPp234Wx2015Eu preset when built for graphql`, () => {
    const skuPp234Wx2015EuPresetGraphql =
      skuPp234Wx2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
