import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2015Eu from './sku-x234-wx-2015-eu';

describe(`with skuX234Wx2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuX234Wx2015Eu preset`, () => {
    const skuX234Wx2015EuPreset =
      skuX234Wx2015Eu().build<TInventoryEntryDraft>();
    expect(skuX234Wx2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2015Eu preset when built for graphql`, () => {
    const skuX234Wx2015EuPresetGraphql =
      skuX234Wx2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
