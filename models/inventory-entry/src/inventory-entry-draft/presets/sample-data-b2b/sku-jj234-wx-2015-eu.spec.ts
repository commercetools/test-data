import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2015Eu from './sku-jj234-wx-2015-eu';

describe(`with skuJj234Wx2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuJj234Wx2015Eu preset`, () => {
    const skuJj234Wx2015EuPreset =
      skuJj234Wx2015Eu().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2015Eu preset when built for graphql`, () => {
    const skuJj234Wx2015EuPresetGraphql =
      skuJj234Wx2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
