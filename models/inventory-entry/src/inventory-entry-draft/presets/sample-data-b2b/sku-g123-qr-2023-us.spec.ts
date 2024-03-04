import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2023Us from './sku-g123-qr-2023-us';

describe(`with skuG123Qr2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuG123Qr2023Us preset`, () => {
    const skuG123Qr2023UsPreset =
      skuG123Qr2023Us().build<TInventoryEntryDraft>();
    expect(skuG123Qr2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2023Us preset when built for graphql`, () => {
    const skuG123Qr2023UsPresetGraphql =
      skuG123Qr2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
