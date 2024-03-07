import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2015Us from './sku-mm123-qr-2015-us';

describe(`with skuMm123Qr2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuMm123Qr2015Us preset`, () => {
    const skuMm123Qr2015UsPreset =
      skuMm123Qr2015Us().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuMm123Qr2015Us preset when built for graphql`, () => {
    const skuMm123Qr2015UsPresetGraphql =
      skuMm123Qr2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
