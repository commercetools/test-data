import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2015DefaultWarehouse preset`, () => {
  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for rest`, () => {
    const skuP234Qw2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2015DefaultWarehouse()
      .build();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for graphql`, () => {
    const skuP234Qw2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuP234Qw2015DefaultWarehouse()
        .build();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
