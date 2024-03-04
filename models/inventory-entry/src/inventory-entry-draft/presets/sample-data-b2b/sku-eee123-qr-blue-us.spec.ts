import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrBlueUs from './sku-eee123-qr-blue-us';

describe(`with skuEee123QrBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuEee123QrBlueUs preset`, () => {
    const skuEee123QrBlueUsPreset =
      skuEee123QrBlueUs().build<TInventoryEntryDraft>();
    expect(skuEee123QrBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrBlueUs preset when built for graphql`, () => {
    const skuEee123QrBlueUsPresetGraphql =
      skuEee123QrBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
