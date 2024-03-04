import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2019Eu from './sku-pp234-wx-2019-eu';

describe(`with skuPp234Wx2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuPp234Wx2019Eu preset`, () => {
    const skuPp234Wx2019EuPreset =
      skuPp234Wx2019Eu().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2019Eu preset when built for graphql`, () => {
    const skuPp234Wx2019EuPresetGraphql =
      skuPp234Wx2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
