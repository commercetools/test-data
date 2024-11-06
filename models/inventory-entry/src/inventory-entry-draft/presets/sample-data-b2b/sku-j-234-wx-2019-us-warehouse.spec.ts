import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJ234Wx2019UsWarehouse preset`, () => {
  it(`should return a skuJ234Wx2019UsWarehouse preset when built for rest`, () => {
    const skuJ234Wx2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJ234Wx2019UsWarehouse()
      .build();
    expect(skuJ234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019UsWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJ234Wx2019UsWarehouse()
      .build();
    expect(skuJ234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019UsWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
