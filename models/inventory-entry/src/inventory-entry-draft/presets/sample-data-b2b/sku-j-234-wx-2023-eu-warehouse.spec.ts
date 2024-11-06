import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJ234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuJ234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuJ234Wx2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJ234Wx2023EuWarehouse()
      .build();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJ234Wx2023EuWarehouse()
      .build();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
