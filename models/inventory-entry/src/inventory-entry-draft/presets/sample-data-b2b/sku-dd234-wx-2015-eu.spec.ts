import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2015Eu from './sku-dd234-wx-2015-eu';

describe(`with skuDd234Wx2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuDd234Wx2015Eu preset`, () => {
    const skuDd234Wx2015EuPreset =
      skuDd234Wx2015Eu().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2015Eu preset when built for graphql`, () => {
    const skuDd234Wx2015EuPresetGraphql =
      skuDd234Wx2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
