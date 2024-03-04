import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2019Eu from './sku-dd234-wx-2019-eu';

describe(`with skuDd234Wx2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuDd234Wx2019Eu preset`, () => {
    const skuDd234Wx2019EuPreset =
      skuDd234Wx2019Eu().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2019Eu preset when built for graphql`, () => {
    const skuDd234Wx2019EuPresetGraphql =
      skuDd234Wx2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
