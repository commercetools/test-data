import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuI789Uv2019UsWarehouse preset`, () => {
  it(`should return a skuI789Uv2019UsWarehouse preset when built for rest`, () => {
    const skuI789Uv2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuI789Uv2019UsWarehouse()
      .build();
    expect(skuI789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019UsWarehouse preset when built for graphql`, () => {
    const skuI789Uv2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuI789Uv2019UsWarehouse()
      .build();
    expect(skuI789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019UsWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
