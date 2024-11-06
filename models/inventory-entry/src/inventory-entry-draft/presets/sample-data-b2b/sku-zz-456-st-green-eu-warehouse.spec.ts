import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StGreenEuWarehouse preset`, () => {
  it(`should return a skuZz456StGreenEuWarehouse preset when built for rest`, () => {
    const skuZz456StGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StGreenEuWarehouse()
      .build();
    expect(skuZz456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenEuWarehouse preset when built for graphql`, () => {
    const skuZz456StGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZz456StGreenEuWarehouse()
      .build();
    expect(skuZz456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuZz456StGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
