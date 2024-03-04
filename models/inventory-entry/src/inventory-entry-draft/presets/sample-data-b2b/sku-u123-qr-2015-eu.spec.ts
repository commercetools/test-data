import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2015Eu from './sku-u123-qr-2015-eu';

describe(`with skuU123Qr2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuU123Qr2015Eu preset`, () => {
    const skuU123Qr2015EuPreset =
      skuU123Qr2015Eu().build<TInventoryEntryDraft>();
    expect(skuU123Qr2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuU123Qr2015Eu preset when built for graphql`, () => {
    const skuU123Qr2015EuPresetGraphql =
      skuU123Qr2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
