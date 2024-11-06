import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuD234Wx2015EuWarehouse preset`, () => {
  it(`should return a skuD234Wx2015EuWarehouse preset when built for rest`, () => {
    const skuD234Wx2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuD234Wx2015EuWarehouse()
      .build();
    expect(skuD234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2015EuWarehouse preset when built for graphql`, () => {
    const skuD234Wx2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuD234Wx2015EuWarehouse()
      .build();
    expect(skuD234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2015EuWarehouse preset when built for legacy rest`, () => {
    const skuD234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuD234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuD234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuD234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
