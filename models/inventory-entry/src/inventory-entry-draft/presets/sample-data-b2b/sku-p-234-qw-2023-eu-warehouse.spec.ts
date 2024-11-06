import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2023EuWarehouse preset`, () => {
  it(`should return a skuP234Qw2023EuWarehouse preset when built for rest`, () => {
    const skuP234Qw2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2023EuWarehouse()
      .build();
    expect(skuP234Qw2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023EuWarehouse preset when built for graphql`, () => {
    const skuP234Qw2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuP234Qw2023EuWarehouse()
      .build();
    expect(skuP234Qw2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023EuWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
