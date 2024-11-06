import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StGreenEuWarehouse preset`, () => {
  it(`should return a skuFff456StGreenEuWarehouse preset when built for rest`, () => {
    const skuFff456StGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuFff456StGreenEuWarehouse()
      .build();
    expect(skuFff456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenEuWarehouse preset when built for graphql`, () => {
    const skuFff456StGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFff456StGreenEuWarehouse()
      .build();
    expect(skuFff456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuFff456StGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
