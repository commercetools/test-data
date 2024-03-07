import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2023Us from './sku-n123-qr-2023-us';

describe(`with skuN123Qr2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuN123Qr2023Us preset`, () => {
    const skuN123Qr2023UsPreset =
      skuN123Qr2023Us().build<TInventoryEntryDraft>();
    expect(skuN123Qr2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuN123Qr2023Us preset when built for graphql`, () => {
    const skuN123Qr2023UsPresetGraphql =
      skuN123Qr2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
