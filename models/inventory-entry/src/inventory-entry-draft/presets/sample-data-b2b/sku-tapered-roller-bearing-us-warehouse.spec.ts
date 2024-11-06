import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTaperedRollerBearingUsWarehouse preset`, () => {
  it(`should return a skuTaperedRollerBearingUsWarehouse preset when built for rest`, () => {
    const skuTaperedRollerBearingUsWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuTaperedRollerBearingUsWarehouse()
        .build();
    expect(skuTaperedRollerBearingUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingUsWarehouse preset when built for graphql`, () => {
    const skuTaperedRollerBearingUsWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuTaperedRollerBearingUsWarehouse()
        .build();
    expect(skuTaperedRollerBearingUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingUsWarehouse preset when built for legacy rest`, () => {
    const skuTaperedRollerBearingUsWarehousePreset = InventoryEntryDraft.presets
      .skuTaperedRollerBearingUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTaperedRollerBearingUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingUsWarehouse preset when built for legacy graphql`, () => {
    const skuTaperedRollerBearingUsWarehousePreset = InventoryEntryDraft.presets
      .skuTaperedRollerBearingUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTaperedRollerBearingUsWarehousePreset).toMatchInlineSnapshot();
  });
});
