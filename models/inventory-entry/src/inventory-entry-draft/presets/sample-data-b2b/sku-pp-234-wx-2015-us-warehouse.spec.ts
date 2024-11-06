import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2015UsWarehouse preset`, () => {
  it(`should return a skuPp234Wx2015UsWarehouse preset when built for rest`, () => {
    const skuPp234Wx2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2015UsWarehouse()
      .build();
    expect(skuPp234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015UsWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPp234Wx2015UsWarehouse()
      .build();
    expect(skuPp234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015UsWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
