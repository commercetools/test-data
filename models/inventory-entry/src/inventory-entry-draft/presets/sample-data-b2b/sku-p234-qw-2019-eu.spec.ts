import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2019Eu from './sku-p234-qw-2019-eu';

describe(`with skuP234Qw2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuP234Qw2019Eu preset`, () => {
    const skuP234Qw2019EuPreset =
      skuP234Qw2019Eu().build<TInventoryEntryDraft>();
    expect(skuP234Qw2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2019Eu preset when built for graphql`, () => {
    const skuP234Qw2019EuPresetGraphql =
      skuP234Qw2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
