import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2023DefaultWarehouse preset`, () => {
  it(`should return a skuP234Qw2023DefaultWarehouse preset when built for rest`, () => {
    const skuP234Qw2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2023DefaultWarehouse()
      .build();
    expect(skuP234Qw2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023DefaultWarehouse preset when built for graphql`, () => {
    const skuP234Qw2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuP234Qw2023DefaultWarehouse()
        .build();
    expect(skuP234Qw2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
