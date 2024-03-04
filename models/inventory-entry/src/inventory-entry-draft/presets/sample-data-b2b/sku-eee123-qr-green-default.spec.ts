import type { TInventoryEntryDraft } from '../../../types';
import skuEee123QrGreenDefault from './sku-eee123-qr-green-default';

describe(`with skuEee123QrGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuEee123QrGreenDefault preset`, () => {
    const skuEee123QrGreenDefaultPreset =
      skuEee123QrGreenDefault().build<TInventoryEntryDraft>();
    expect(skuEee123QrGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrGreenDefault preset when built for graphql`, () => {
    const skuEee123QrGreenDefaultPresetGraphql =
      skuEee123QrGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuEee123QrGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
