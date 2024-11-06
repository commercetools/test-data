import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDd234Wx2015EuWarehouse preset`, () => {
  it(`should return a skuDd234Wx2015EuWarehouse preset when built for rest`, () => {
    const skuDd234Wx2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuDd234Wx2015EuWarehouse()
      .build();
    expect(skuDd234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015EuWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDd234Wx2015EuWarehouse()
      .build();
    expect(skuDd234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015EuWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
