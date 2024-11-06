import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX234Wx2019UsWarehouse preset`, () => {
  it(`should return a skuX234Wx2019UsWarehouse preset when built for rest`, () => {
    const skuX234Wx2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuX234Wx2019UsWarehouse()
      .build();
    expect(skuX234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2019UsWarehouse preset when built for graphql`, () => {
    const skuX234Wx2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX234Wx2019UsWarehouse()
      .build();
    expect(skuX234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2019UsWarehouse preset when built for legacy rest`, () => {
    const skuX234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuX234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
