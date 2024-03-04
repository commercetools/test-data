import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2015Us from './sku-aa123-qr-2015-us';

describe(`with skuAa123Qr2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuAa123Qr2015Us preset`, () => {
    const skuAa123Qr2015UsPreset =
      skuAa123Qr2015Us().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2015Us preset when built for graphql`, () => {
    const skuAa123Qr2015UsPresetGraphql =
      skuAa123Qr2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
