import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2019EuWarehouse preset`, () => {
  it(`should return a skuP234Qw2019EuWarehouse preset when built for rest`, () => {
    const skuP234Qw2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2019EuWarehouse()
      .build();
    expect(skuP234Qw2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019EuWarehouse preset when built for graphql`, () => {
    const skuP234Qw2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuP234Qw2019EuWarehouse()
      .build();
    expect(skuP234Qw2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019EuWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
