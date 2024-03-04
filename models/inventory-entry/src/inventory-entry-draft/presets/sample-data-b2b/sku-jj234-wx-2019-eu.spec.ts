import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2019Eu from './sku-jj234-wx-2019-eu';

describe(`with skuJj234Wx2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuJj234Wx2019Eu preset`, () => {
    const skuJj234Wx2019EuPreset =
      skuJj234Wx2019Eu().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2019Eu preset when built for graphql`, () => {
    const skuJj234Wx2019EuPresetGraphql =
      skuJj234Wx2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
