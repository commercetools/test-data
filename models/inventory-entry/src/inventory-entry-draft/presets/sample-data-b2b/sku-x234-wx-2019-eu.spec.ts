import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2019Eu from './sku-x234-wx-2019-eu';

describe(`with skuX234Wx2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuX234Wx2019Eu preset`, () => {
    const skuX234Wx2019EuPreset =
      skuX234Wx2019Eu().build<TInventoryEntryDraft>();
    expect(skuX234Wx2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX234Wx2019Eu preset when built for graphql`, () => {
    const skuX234Wx2019EuPresetGraphql =
      skuX234Wx2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
