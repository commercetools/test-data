import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrRed from './sku-ss-123-qr-red';

describe(`with skuSs123QrRed preset`, () => {
  it(`should return a skuSs123QrRed preset`, () => {
    const skuSs123QrRedPreset = skuSs123QrRed().build<TInventoryEntryDraft>();
    expect(skuSs123QrRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrRed preset when built for graphql`, () => {
    const skuSs123QrRedPresetGraphql =
      skuSs123QrRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-red",
        "supplyChannel": undefined,
      }
    `);
  });
});
