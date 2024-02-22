import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2019 from './sku-mm-123-qr-2019';

describe(`with skuMm123Qr2019 preset`, () => {
  it(`should return a skuMm123Qr2019 preset`, () => {
    const skuMm123Qr2019Preset = skuMm123Qr2019().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2019 preset when built for graphql`, () => {
    const skuMm123Qr2019PresetGraphql =
      skuMm123Qr2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
