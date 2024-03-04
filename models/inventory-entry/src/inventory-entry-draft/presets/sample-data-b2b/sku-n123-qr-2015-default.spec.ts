import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2015Default from './sku-n123-qr-2015-default';

describe(`with skuN123Qr2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuN123Qr2015Default preset`, () => {
    const skuN123Qr2015DefaultPreset =
      skuN123Qr2015Default().build<TInventoryEntryDraft>();
    expect(skuN123Qr2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuN123Qr2015Default preset when built for graphql`, () => {
    const skuN123Qr2015DefaultPresetGraphql =
      skuN123Qr2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
