import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDd234Wx2019EuWarehouse preset`, () => {
  it(`should return a skuDd234Wx2019EuWarehouse preset when built for rest`, () => {
    const skuDd234Wx2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuDd234Wx2019EuWarehouse()
      .build();
    expect(skuDd234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2019EuWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDd234Wx2019EuWarehouse()
      .build();
    expect(skuDd234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2019EuWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDd234Wx2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuDd234Wx2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
