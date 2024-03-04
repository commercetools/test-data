import type { TInventoryEntryDraft } from '../../../types';
import skuYy123QrGreenDefault from './sku-yy123-qr-green-default';

describe(`with skuYy123QrGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuYy123QrGreenDefault preset`, () => {
    const skuYy123QrGreenDefaultPreset =
      skuYy123QrGreenDefault().build<TInventoryEntryDraft>();
    expect(skuYy123QrGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuYy123QrGreenDefault preset when built for graphql`, () => {
    const skuYy123QrGreenDefaultPresetGraphql =
      skuYy123QrGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuYy123QrGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
