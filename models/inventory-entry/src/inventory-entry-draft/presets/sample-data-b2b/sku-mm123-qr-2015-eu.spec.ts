import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2015Eu from './sku-mm123-qr-2015-eu';

describe(`with skuMm123Qr2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuMm123Qr2015Eu preset`, () => {
    const skuMm123Qr2015EuPreset =
      skuMm123Qr2015Eu().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2015Eu preset when built for graphql`, () => {
    const skuMm123Qr2015EuPresetGraphql =
      skuMm123Qr2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
