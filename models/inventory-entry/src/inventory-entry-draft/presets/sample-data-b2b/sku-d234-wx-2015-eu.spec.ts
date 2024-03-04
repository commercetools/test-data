import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2015Eu from './sku-d234-wx-2015-eu';

describe(`with skuD234Wx2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuD234Wx2015Eu preset`, () => {
    const skuD234Wx2015EuPreset =
      skuD234Wx2015Eu().build<TInventoryEntryDraft>();
    expect(skuD234Wx2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuD234Wx2015Eu preset when built for graphql`, () => {
    const skuD234Wx2015EuPresetGraphql =
      skuD234Wx2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
