import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-jar-08';

describe(`with skuJar08 preset`, () => {
  it(`should return a skuJar08 preset when built for rest`, () => {
    const skuJar08Preset = presets.restPreset().build();
    expect(skuJar08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "JAR-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJar08 preset when built for graphql`, () => {
    const skuJar08Preset = presets.graphqlPreset().build();
    expect(skuJar08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "JAR-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJar08 preset when built for legacy rest`, () => {
    const skuJar08Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJar08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "JAR-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJar08 preset when built for legacy graphql`, () => {
    const skuJar08Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJar08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "JAR-08",
        "supplyChannel": undefined,
      }
    `);
  });
});