import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2023Eu from './sku-x234-wx-2023-eu';

describe(`with skuX234Wx2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuX234Wx2023Eu preset`, () => {
    const skuX234Wx2023EuPreset =
      skuX234Wx2023Eu().build<TInventoryEntryDraft>();
    expect(skuX234Wx2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX234Wx2023Eu preset when built for graphql`, () => {
    const skuX234Wx2023EuPresetGraphql =
      skuX234Wx2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
