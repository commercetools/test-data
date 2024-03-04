import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2019Eu from './sku-d234-wx-2019-eu';

describe(`with skuD234Wx2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuD234Wx2019Eu preset`, () => {
    const skuD234Wx2019EuPreset =
      skuD234Wx2019Eu().build<TInventoryEntryDraft>();
    expect(skuD234Wx2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2019Eu preset when built for graphql`, () => {
    const skuD234Wx2019EuPresetGraphql =
      skuD234Wx2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
