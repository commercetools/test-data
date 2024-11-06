import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX234Wx2015UsWarehouse preset`, () => {
  it(`should return a skuX234Wx2015UsWarehouse preset when built for rest`, () => {
    const skuX234Wx2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuX234Wx2015UsWarehouse()
      .build();
    expect(skuX234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2015UsWarehouse preset when built for graphql`, () => {
    const skuX234Wx2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX234Wx2015UsWarehouse()
      .build();
    expect(skuX234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2015UsWarehouse preset when built for legacy rest`, () => {
    const skuX234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX234Wx2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuX234Wx2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuX234Wx2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX234Wx2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
