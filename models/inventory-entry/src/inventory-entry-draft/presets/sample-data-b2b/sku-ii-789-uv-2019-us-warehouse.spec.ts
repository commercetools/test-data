import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2019UsWarehouse preset`, () => {
  it(`should return a skuIi789Uv2019UsWarehouse preset when built for rest`, () => {
    const skuIi789Uv2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2019UsWarehouse()
      .build();
    expect(skuIi789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019UsWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIi789Uv2019UsWarehouse()
      .build();
    expect(skuIi789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019UsWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
