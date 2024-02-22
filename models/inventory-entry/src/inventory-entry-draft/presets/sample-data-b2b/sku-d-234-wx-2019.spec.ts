import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2019 from './sku-d-234-wx-2019';

describe(`with skuD234Wx2019 preset`, () => {
  it(`should return a skuD234Wx2019 preset`, () => {
    const skuD234Wx2019Preset = skuD234Wx2019().build<TInventoryEntryDraft>();
    expect(skuD234Wx2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2019 preset when built for graphql`, () => {
    const skuD234Wx2019PresetGraphql =
      skuD234Wx2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
