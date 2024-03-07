import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrRedDefault from './sku-yy123-qr-red-default';

describe(`with skuYy123QrRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuYy123QrRedDefault preset`, () => {
    const skuYy123QrRedDefaultPreset =
      skuYy123QrRedDefault().build<TInventoryEntryDraft>();
    expect(skuYy123QrRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrRedDefault preset when built for graphql`, () => {
    const skuYy123QrRedDefaultPresetGraphql =
      skuYy123QrRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
