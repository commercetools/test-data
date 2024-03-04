import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2023Us from './sku-aa123-qr-2023-us';

describe(`with skuAa123Qr2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuAa123Qr2023Us preset`, () => {
    const skuAa123Qr2023UsPreset =
      skuAa123Qr2023Us().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2023Us preset when built for graphql`, () => {
    const skuAa123Qr2023UsPresetGraphql =
      skuAa123Qr2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
