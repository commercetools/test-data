import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPneumaticTireUsWarehouse preset`, () => {
  it(`should return a skuPneumaticTireUsWarehouse preset when built for rest`, () => {
    const skuPneumaticTireUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuPneumaticTireUsWarehouse()
      .build();
    expect(skuPneumaticTireUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireUsWarehouse preset when built for graphql`, () => {
    const skuPneumaticTireUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPneumaticTireUsWarehouse()
      .build();
    expect(skuPneumaticTireUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireUsWarehouse preset when built for legacy rest`, () => {
    const skuPneumaticTireUsWarehousePreset = InventoryEntryDraft.presets
      .skuPneumaticTireUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPneumaticTireUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPneumaticTireUsWarehouse preset when built for legacy graphql`, () => {
    const skuPneumaticTireUsWarehousePreset = InventoryEntryDraft.presets
      .skuPneumaticTireUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPneumaticTireUsWarehousePreset).toMatchInlineSnapshot();
  });
});
