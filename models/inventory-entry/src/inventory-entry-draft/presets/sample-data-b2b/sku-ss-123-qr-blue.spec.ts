import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrBlue from './sku-ss-123-qr-blue';

describe(`with skuSs123QrBlue preset`, () => {
  it(`should return a skuSs123QrBlue preset`, () => {
    const skuSs123QrBluePreset = skuSs123QrBlue().build<TInventoryEntryDraft>();
    expect(skuSs123QrBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrBlue preset when built for graphql`, () => {
    const skuSs123QrBluePresetGraphql =
      skuSs123QrBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
