import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuD234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuD234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuD234Wx2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuD234Wx2023EuWarehouse()
      .build();
    expect(skuD234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuD234Wx2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuD234Wx2023EuWarehouse()
      .build();
    expect(skuD234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuD234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuD234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuD234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuD234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
