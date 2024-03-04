import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrRedDefault from './sku-ss123-qr-red-default';

describe(`with skuSs123QrRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuSs123QrRedDefault preset`, () => {
    const skuSs123QrRedDefaultPreset =
      skuSs123QrRedDefault().build<TInventoryEntryDraft>();
    expect(skuSs123QrRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrRedDefault preset when built for graphql`, () => {
    const skuSs123QrRedDefaultPresetGraphql =
      skuSs123QrRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ss123-qr-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
