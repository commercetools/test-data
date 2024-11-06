import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJ234Wx2019EuWarehouse preset`, () => {
  it(`should return a skuJ234Wx2019EuWarehouse preset when built for rest`, () => {
    const skuJ234Wx2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJ234Wx2019EuWarehouse()
      .build();
    expect(skuJ234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019EuWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJ234Wx2019EuWarehouse()
      .build();
    expect(skuJ234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019EuWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
