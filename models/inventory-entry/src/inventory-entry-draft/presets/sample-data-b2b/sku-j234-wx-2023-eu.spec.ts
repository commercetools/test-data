import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2023Eu from './sku-j234-wx-2023-eu';

describe(`with skuJ234Wx2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuJ234Wx2023Eu preset`, () => {
    const skuJ234Wx2023EuPreset =
      skuJ234Wx2023Eu().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJ234Wx2023Eu preset when built for graphql`, () => {
    const skuJ234Wx2023EuPresetGraphql =
      skuJ234Wx2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
