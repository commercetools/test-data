import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuI789Uv2019EuWarehouse preset`, () => {
  it(`should return a skuI789Uv2019EuWarehouse preset when built for rest`, () => {
    const skuI789Uv2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuI789Uv2019EuWarehouse()
      .build();
    expect(skuI789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019EuWarehouse preset when built for graphql`, () => {
    const skuI789Uv2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuI789Uv2019EuWarehouse()
      .build();
    expect(skuI789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019EuWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
