import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2023Eu from './sku-dd234-wx-2023-eu';

describe(`with skuDd234Wx2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuDd234Wx2023Eu preset`, () => {
    const skuDd234Wx2023EuPreset =
      skuDd234Wx2023Eu().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2023Eu preset when built for graphql`, () => {
    const skuDd234Wx2023EuPresetGraphql =
      skuDd234Wx2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
