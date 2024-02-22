import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2023 from './sku-d-234-wx-2023';

describe(`with skuD234Wx2023 preset`, () => {
  it(`should return a skuD234Wx2023 preset`, () => {
    const skuD234Wx2023Preset = skuD234Wx2023().build<TInventoryEntryDraft>();
    expect(skuD234Wx2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2023 preset when built for graphql`, () => {
    const skuD234Wx2023PresetGraphql =
      skuD234Wx2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
