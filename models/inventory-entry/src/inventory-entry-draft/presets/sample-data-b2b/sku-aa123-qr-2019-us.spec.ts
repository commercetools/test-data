import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2019Us from './sku-aa123-qr-2019-us';

describe(`with skuAa123Qr2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuAa123Qr2019Us preset`, () => {
    const skuAa123Qr2019UsPreset =
      skuAa123Qr2019Us().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAa123Qr2019Us preset when built for graphql`, () => {
    const skuAa123Qr2019UsPresetGraphql =
      skuAa123Qr2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
