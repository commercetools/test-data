import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2019Us from './sku-n123-qr-2019-us';

describe(`with skuN123Qr2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuN123Qr2019Us preset`, () => {
    const skuN123Qr2019UsPreset =
      skuN123Qr2019Us().build<TInventoryEntryDraft>();
    expect(skuN123Qr2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuN123Qr2019Us preset when built for graphql`, () => {
    const skuN123Qr2019UsPresetGraphql =
      skuN123Qr2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
