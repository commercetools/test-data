import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2023Eu from './sku-jj234-wx-2023-eu';

describe(`with skuJj234Wx2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuJj234Wx2023Eu preset`, () => {
    const skuJj234Wx2023EuPreset =
      skuJj234Wx2023Eu().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2023Eu preset when built for graphql`, () => {
    const skuJj234Wx2023EuPresetGraphql =
      skuJj234Wx2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
