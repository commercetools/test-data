import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuP234Qw2019UsWarehouse preset`, () => {
  it(`should return a skuP234Qw2019UsWarehouse preset when built for rest`, () => {
    const skuP234Qw2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuP234Qw2019UsWarehouse()
      .build();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019UsWarehouse preset when built for graphql`, () => {
    const skuP234Qw2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuP234Qw2019UsWarehouse()
      .build();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019UsWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuP234Qw2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuP234Qw2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
