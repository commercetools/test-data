import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2015Eu from './sku-j234-wx-2015-eu';

describe(`with skuJ234Wx2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuJ234Wx2015Eu preset`, () => {
    const skuJ234Wx2015EuPreset =
      skuJ234Wx2015Eu().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2015Eu preset when built for graphql`, () => {
    const skuJ234Wx2015EuPresetGraphql =
      skuJ234Wx2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
