import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrRedDefault from './sku-eee123-qr-red-default';

describe(`with skuEee123QrRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuEee123QrRedDefault preset`, () => {
    const skuEee123QrRedDefaultPreset =
      skuEee123QrRedDefault().build<TInventoryEntryDraft>();
    expect(skuEee123QrRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEee123QrRedDefault preset when built for graphql`, () => {
    const skuEee123QrRedDefaultPresetGraphql =
      skuEee123QrRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
