import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StGreenEuWarehouse preset`, () => {
  it(`should return a skuTt456StGreenEuWarehouse preset when built for rest`, () => {
    const skuTt456StGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StGreenEuWarehouse()
      .build();
    expect(skuTt456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenEuWarehouse preset when built for graphql`, () => {
    const skuTt456StGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuTt456StGreenEuWarehouse()
      .build();
    expect(skuTt456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuTt456StGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
