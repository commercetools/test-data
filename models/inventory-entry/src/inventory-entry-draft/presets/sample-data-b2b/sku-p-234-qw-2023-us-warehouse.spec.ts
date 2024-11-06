import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2023UsWarehouse preset`, () => {
  it(`should return a skuP234Qw2023UsWarehouse preset when built for rest`, () => {
    const skuP234Qw2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2023UsWarehouse()
      .build();
    expect(skuP234Qw2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023UsWarehouse preset when built for graphql`, () => {
    const skuP234Qw2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuP234Qw2023UsWarehouse()
      .build();
    expect(skuP234Qw2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023UsWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
