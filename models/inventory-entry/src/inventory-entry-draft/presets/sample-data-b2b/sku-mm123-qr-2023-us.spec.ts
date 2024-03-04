import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2023Us from './sku-mm123-qr-2023-us';

describe(`with skuMm123Qr2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuMm123Qr2023Us preset`, () => {
    const skuMm123Qr2023UsPreset =
      skuMm123Qr2023Us().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuMm123Qr2023Us preset when built for graphql`, () => {
    const skuMm123Qr2023UsPresetGraphql =
      skuMm123Qr2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
