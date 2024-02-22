import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2019 from './sku-n-123-qr-2019';

describe(`with skuN123Qr2019 preset`, () => {
  it(`should return a skuN123Qr2019 preset`, () => {
    const skuN123Qr2019Preset = skuN123Qr2019().build<TInventoryEntryDraft>();
    expect(skuN123Qr2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuN123Qr2019 preset when built for graphql`, () => {
    const skuN123Qr2019PresetGraphql =
      skuN123Qr2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
