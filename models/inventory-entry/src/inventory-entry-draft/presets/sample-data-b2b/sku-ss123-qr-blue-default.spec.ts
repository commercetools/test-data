import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrBlueDefault from './sku-ss123-qr-blue-default';

describe(`with skuSs123QrBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuSs123QrBlueDefault preset`, () => {
    const skuSs123QrBlueDefaultPreset =
      skuSs123QrBlueDefault().build<TInventoryEntryDraft>();
    expect(skuSs123QrBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrBlueDefault preset when built for graphql`, () => {
    const skuSs123QrBlueDefaultPresetGraphql =
      skuSs123QrBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
