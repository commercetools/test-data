import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2015Eu from './sku-n123-qr-2015-eu';

describe(`with skuN123Qr2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuN123Qr2015Eu preset`, () => {
    const skuN123Qr2015EuPreset =
      skuN123Qr2015Eu().build<TInventoryEntryDraft>();
    expect(skuN123Qr2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuN123Qr2015Eu preset when built for graphql`, () => {
    const skuN123Qr2015EuPresetGraphql =
      skuN123Qr2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
