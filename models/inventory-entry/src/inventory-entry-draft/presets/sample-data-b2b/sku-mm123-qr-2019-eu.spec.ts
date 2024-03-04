import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2019Eu from './sku-mm123-qr-2019-eu';

describe(`with skuMm123Qr2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuMm123Qr2019Eu preset`, () => {
    const skuMm123Qr2019EuPreset =
      skuMm123Qr2019Eu().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2019Eu preset when built for graphql`, () => {
    const skuMm123Qr2019EuPresetGraphql =
      skuMm123Qr2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
