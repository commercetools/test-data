import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2015 from './sku-mm-123-qr-2015';

describe(`with skuMm123Qr2015 preset`, () => {
  it(`should return a skuMm123Qr2015 preset`, () => {
    const skuMm123Qr2015Preset = skuMm123Qr2015().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2015 preset when built for graphql`, () => {
    const skuMm123Qr2015PresetGraphql =
      skuMm123Qr2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
