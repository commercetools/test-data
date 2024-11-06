import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCc789Uv2015EuWarehouse preset`, () => {
  it(`should return a skuCc789Uv2015EuWarehouse preset when built for rest`, () => {
    const skuCc789Uv2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuCc789Uv2015EuWarehouse()
      .build();
    expect(skuCc789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015EuWarehouse preset when built for graphql`, () => {
    const skuCc789Uv2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCc789Uv2015EuWarehouse()
      .build();
    expect(skuCc789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015EuWarehouse preset when built for legacy rest`, () => {
    const skuCc789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCc789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuCc789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCc789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
