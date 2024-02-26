import type { TInventoryEntryDraft } from '../../../types';
import skuSs123QrGreen from './sku-ss-123-qr-green';

describe(`with skuSs123QrGreen preset`, () => {
  it(`should return a skuSs123QrGreen preset`, () => {
    const skuSs123QrGreenPreset =
      skuSs123QrGreen().build<TInventoryEntryDraft>();
    expect(skuSs123QrGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSs123QrGreen preset when built for graphql`, () => {
    const skuSs123QrGreenPresetGraphql =
      skuSs123QrGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuSs123QrGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ss123-qr-green",
        "supplyChannel": undefined,
      }
    `);
  });
});
