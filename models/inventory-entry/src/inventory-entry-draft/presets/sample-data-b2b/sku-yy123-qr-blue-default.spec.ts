import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrBlueDefault from './sku-yy123-qr-blue-default';

describe(`with skuYy123QrBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuYy123QrBlueDefault preset`, () => {
    const skuYy123QrBlueDefaultPreset =
      skuYy123QrBlueDefault().build<TInventoryEntryDraft>();
    expect(skuYy123QrBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuYy123QrBlueDefault preset when built for graphql`, () => {
    const skuYy123QrBlueDefaultPresetGraphql =
      skuYy123QrBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
