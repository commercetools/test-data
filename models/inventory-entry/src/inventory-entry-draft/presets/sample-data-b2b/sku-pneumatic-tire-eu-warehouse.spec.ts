import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPneumaticTireEuWarehouse preset`, () => {
  it(`should return a skuPneumaticTireEuWarehouse preset when built for rest`, () => {
    const skuPneumaticTireEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuPneumaticTireEuWarehouse()
      .build();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireEuWarehouse preset when built for graphql`, () => {
    const skuPneumaticTireEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPneumaticTireEuWarehouse()
      .build();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireEuWarehouse preset when built for legacy rest`, () => {
    const skuPneumaticTireEuWarehousePreset = InventoryEntryDraft.presets
      .skuPneumaticTireEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireEuWarehouse preset when built for legacy graphql`, () => {
    const skuPneumaticTireEuWarehousePreset = InventoryEntryDraft.presets
      .skuPneumaticTireEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot();
  });
});
