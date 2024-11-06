import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuW789Uv2015EuWarehouse preset`, () => {
  it(`should return a skuW789Uv2015EuWarehouse preset when built for rest`, () => {
    const skuW789Uv2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuW789Uv2015EuWarehouse()
      .build();
    expect(skuW789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015EuWarehouse preset when built for graphql`, () => {
    const skuW789Uv2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuW789Uv2015EuWarehouse()
      .build();
    expect(skuW789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015EuWarehouse preset when built for legacy rest`, () => {
    const skuW789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuW789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuW789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuW789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
