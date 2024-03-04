import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2019Eu from './sku-n123-qr-2019-eu';

describe(`with skuN123Qr2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuN123Qr2019Eu preset`, () => {
    const skuN123Qr2019EuPreset =
      skuN123Qr2019Eu().build<TInventoryEntryDraft>();
    expect(skuN123Qr2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuN123Qr2019Eu preset when built for graphql`, () => {
    const skuN123Qr2019EuPresetGraphql =
      skuN123Qr2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
