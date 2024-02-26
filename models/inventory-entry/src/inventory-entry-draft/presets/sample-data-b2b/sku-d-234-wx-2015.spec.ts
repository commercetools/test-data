import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2015 from './sku-d-234-wx-2015';

describe(`with skuD234Wx2015 preset`, () => {
  it(`should return a skuD234Wx2015 preset`, () => {
    const skuD234Wx2015Preset = skuD234Wx2015().build<TInventoryEntryDraft>();
    expect(skuD234Wx2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2015 preset when built for graphql`, () => {
    const skuD234Wx2015PresetGraphql =
      skuD234Wx2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
