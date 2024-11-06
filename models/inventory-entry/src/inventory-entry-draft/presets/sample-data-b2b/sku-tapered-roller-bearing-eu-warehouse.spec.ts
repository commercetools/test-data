import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTaperedRollerBearingEuWarehouse preset`, () => {
  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for rest`, () => {
    const skuTaperedRollerBearingEuWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuTaperedRollerBearingEuWarehouse()
        .build();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for graphql`, () => {
    const skuTaperedRollerBearingEuWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuTaperedRollerBearingEuWarehouse()
        .build();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for legacy rest`, () => {
    const skuTaperedRollerBearingEuWarehousePreset = InventoryEntryDraft.presets
      .skuTaperedRollerBearingEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for legacy graphql`, () => {
    const skuTaperedRollerBearingEuWarehousePreset = InventoryEntryDraft.presets
      .skuTaperedRollerBearingEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot();
  });
});
