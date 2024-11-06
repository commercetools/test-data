import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTaperedRollerBearingDefaultWarehouse preset`, () => {
  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for rest`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuTaperedRollerBearingDefaultWarehouse()
        .build();
    expect(
      skuTaperedRollerBearingDefaultWarehousePreset
    ).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for graphql`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuTaperedRollerBearingDefaultWarehouse()
        .build();
    expect(
      skuTaperedRollerBearingDefaultWarehousePreset
    ).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for legacy rest`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset =
      InventoryEntryDraft.presets
        .skuTaperedRollerBearingDefaultWarehouse()
        .buildRest<TInventoryEntryDraftRest>();
    expect(
      skuTaperedRollerBearingDefaultWarehousePreset
    ).toMatchInlineSnapshot();
  });

  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset =
      InventoryEntryDraft.presets
        .skuTaperedRollerBearingDefaultWarehouse()
        .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(
      skuTaperedRollerBearingDefaultWarehousePreset
    ).toMatchInlineSnapshot();
  });
});
