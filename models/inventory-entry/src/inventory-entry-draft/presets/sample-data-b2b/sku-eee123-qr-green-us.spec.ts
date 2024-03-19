import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrGreenUs from './sku-eee123-qr-green-us';

describe(`with skuEee123QrGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuEee123QrGreenUs preset`, () => {
    const skuEee123QrGreenUsPreset =
      skuEee123QrGreenUs().build<TInventoryEntryDraft>();
    expect(skuEee123QrGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrGreenUs preset when built for graphql`, () => {
    const skuEee123QrGreenUsPresetGraphql =
      skuEee123QrGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
