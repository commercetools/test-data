import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJj234Wx2015UsWarehouse preset`, () => {
  it(`should return a skuJj234Wx2015UsWarehouse preset when built for rest`, () => {
    const skuJj234Wx2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJj234Wx2015UsWarehouse()
      .build();
    expect(skuJj234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2015UsWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJj234Wx2015UsWarehouse()
      .build();
    expect(skuJj234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2015UsWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
