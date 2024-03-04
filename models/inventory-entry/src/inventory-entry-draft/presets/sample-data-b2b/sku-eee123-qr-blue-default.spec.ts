import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrBlueDefault from './sku-eee123-qr-blue-default';

describe(`with skuEee123QrBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuEee123QrBlueDefault preset`, () => {
    const skuEee123QrBlueDefaultPreset =
      skuEee123QrBlueDefault().build<TInventoryEntryDraft>();
    expect(skuEee123QrBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrBlueDefault preset when built for graphql`, () => {
    const skuEee123QrBlueDefaultPresetGraphql =
      skuEee123QrBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
