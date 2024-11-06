import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJj234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuJj234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuJj234Wx2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJj234Wx2023EuWarehouse()
      .build();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJj234Wx2023EuWarehouse()
      .build();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
