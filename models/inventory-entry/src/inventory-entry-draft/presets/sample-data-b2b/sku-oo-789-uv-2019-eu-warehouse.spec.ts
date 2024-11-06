import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOo789Uv2019EuWarehouse preset`, () => {
  it(`should return a skuOo789Uv2019EuWarehouse preset when built for rest`, () => {
    const skuOo789Uv2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuOo789Uv2019EuWarehouse()
      .build();
    expect(skuOo789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019EuWarehouse preset when built for graphql`, () => {
    const skuOo789Uv2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuOo789Uv2019EuWarehouse()
      .build();
    expect(skuOo789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019EuWarehouse preset when built for legacy rest`, () => {
    const skuOo789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOo789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuOo789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOo789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
