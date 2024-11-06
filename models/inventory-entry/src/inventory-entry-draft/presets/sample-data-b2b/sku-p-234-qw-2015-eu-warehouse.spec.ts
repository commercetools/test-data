import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2015EuWarehouse preset`, () => {
  it(`should return a skuP234Qw2015EuWarehouse preset when built for rest`, () => {
    const skuP234Qw2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2015EuWarehouse()
      .build();
    expect(skuP234Qw2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2015EuWarehouse preset when built for graphql`, () => {
    const skuP234Qw2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuP234Qw2015EuWarehouse()
      .build();
    expect(skuP234Qw2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2015EuWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
