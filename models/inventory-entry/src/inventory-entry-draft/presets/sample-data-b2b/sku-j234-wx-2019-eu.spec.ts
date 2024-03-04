import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2019Eu from './sku-j234-wx-2019-eu';

describe(`with skuJ234Wx2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuJ234Wx2019Eu preset`, () => {
    const skuJ234Wx2019EuPreset =
      skuJ234Wx2019Eu().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2019Eu preset when built for graphql`, () => {
    const skuJ234Wx2019EuPresetGraphql =
      skuJ234Wx2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
