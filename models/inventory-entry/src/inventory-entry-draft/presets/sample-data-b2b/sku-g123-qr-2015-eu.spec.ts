import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2015Eu from './sku-g123-qr-2015-eu';

describe(`with skuG123Qr2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuG123Qr2015Eu preset`, () => {
    const skuG123Qr2015EuPreset =
      skuG123Qr2015Eu().build<TInventoryEntryDraft>();
    expect(skuG123Qr2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2015Eu preset when built for graphql`, () => {
    const skuG123Qr2015EuPresetGraphql =
      skuG123Qr2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
