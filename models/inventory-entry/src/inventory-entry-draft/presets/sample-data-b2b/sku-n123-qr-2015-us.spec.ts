import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2015Us from './sku-n123-qr-2015-us';

describe(`with skuN123Qr2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuN123Qr2015Us preset`, () => {
    const skuN123Qr2015UsPreset =
      skuN123Qr2015Us().build<TInventoryEntryDraft>();
    expect(skuN123Qr2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuN123Qr2015Us preset when built for graphql`, () => {
    const skuN123Qr2015UsPresetGraphql =
      skuN123Qr2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
