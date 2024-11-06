import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJj234Wx2019UsWarehouse preset`, () => {
  it(`should return a skuJj234Wx2019UsWarehouse preset when built for rest`, () => {
    const skuJj234Wx2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJj234Wx2019UsWarehouse()
      .build();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2019UsWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJj234Wx2019UsWarehouse()
      .build();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2019UsWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
