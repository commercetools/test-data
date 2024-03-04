import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2019Eu from './sku-g123-qr-2019-eu';

describe(`with skuG123Qr2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuG123Qr2019Eu preset`, () => {
    const skuG123Qr2019EuPreset =
      skuG123Qr2019Eu().build<TInventoryEntryDraft>();
    expect(skuG123Qr2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2019Eu preset when built for graphql`, () => {
    const skuG123Qr2019EuPresetGraphql =
      skuG123Qr2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
