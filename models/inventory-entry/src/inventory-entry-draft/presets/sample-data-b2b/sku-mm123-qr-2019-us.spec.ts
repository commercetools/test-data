import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2019Us from './sku-mm123-qr-2019-us';

describe(`with skuMm123Qr2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuMm123Qr2019Us preset`, () => {
    const skuMm123Qr2019UsPreset =
      skuMm123Qr2019Us().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2019Us preset when built for graphql`, () => {
    const skuMm123Qr2019UsPresetGraphql =
      skuMm123Qr2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
