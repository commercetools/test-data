import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2023Us from './sku-u123-qr-2023-us';

describe(`with skuU123Qr2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuU123Qr2023Us preset`, () => {
    const skuU123Qr2023UsPreset =
      skuU123Qr2023Us().build<TInventoryEntryDraft>();
    expect(skuU123Qr2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2023Us preset when built for graphql`, () => {
    const skuU123Qr2023UsPresetGraphql =
      skuU123Qr2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
