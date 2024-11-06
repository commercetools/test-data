import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2019DefaultWarehouse preset`, () => {
  it(`should return a skuP234Qw2019DefaultWarehouse preset when built for rest`, () => {
    const skuP234Qw2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2019DefaultWarehouse()
      .build();
    expect(skuP234Qw2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019DefaultWarehouse preset when built for graphql`, () => {
    const skuP234Qw2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuP234Qw2019DefaultWarehouse()
        .build();
    expect(skuP234Qw2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
