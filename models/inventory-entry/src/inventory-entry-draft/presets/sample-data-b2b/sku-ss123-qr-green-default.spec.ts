import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrGreenDefault from './sku-ss123-qr-green-default';

describe(`with skuSs123QrGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuSs123QrGreenDefault preset`, () => {
    const skuSs123QrGreenDefaultPreset =
      skuSs123QrGreenDefault().build<TInventoryEntryDraft>();
    expect(skuSs123QrGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrGreenDefault preset when built for graphql`, () => {
    const skuSs123QrGreenDefaultPresetGraphql =
      skuSs123QrGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
