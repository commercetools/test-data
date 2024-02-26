import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2015 from './sku-n-123-qr-2015';

describe(`with skuN123Qr2015 preset`, () => {
  it(`should return a skuN123Qr2015 preset`, () => {
    const skuN123Qr2015Preset = skuN123Qr2015().build<TInventoryEntryDraft>();
    expect(skuN123Qr2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuN123Qr2015 preset when built for graphql`, () => {
    const skuN123Qr2015PresetGraphql =
      skuN123Qr2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
