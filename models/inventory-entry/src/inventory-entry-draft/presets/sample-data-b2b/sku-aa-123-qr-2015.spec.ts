import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2015 from './sku-aa-123-qr-2015';

describe(`with skuAa123Qr2015 preset`, () => {
  it(`should return a skuAa123Qr2015 preset`, () => {
    const skuAa123Qr2015Preset = skuAa123Qr2015().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2015 preset when built for graphql`, () => {
    const skuAa123Qr2015PresetGraphql =
      skuAa123Qr2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
