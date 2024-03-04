import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2019Eu from './sku-u123-qr-2019-eu';

describe(`with skuU123Qr2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuU123Qr2019Eu preset`, () => {
    const skuU123Qr2019EuPreset =
      skuU123Qr2019Eu().build<TInventoryEntryDraft>();
    expect(skuU123Qr2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2019Eu preset when built for graphql`, () => {
    const skuU123Qr2019EuPresetGraphql =
      skuU123Qr2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
