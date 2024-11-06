import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMb0973 preset`, () => {
  it(`should return a skuMb0973 preset when built for rest`, () => {
    const skuMb0973Preset = InventoryEntryDraftRest.presets.skuMb0973().build();
    expect(skuMb0973Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMb0973 preset when built for graphql`, () => {
    const skuMb0973Preset = InventoryEntryDraftGraphql.presets
      .skuMb0973()
      .build();
    expect(skuMb0973Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMb0973 preset when built for legacy rest`, () => {
    const skuMb0973Preset = InventoryEntryDraft.presets
      .skuMb0973()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMb0973Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMb0973 preset when built for legacy graphql`, () => {
    const skuMb0973Preset = InventoryEntryDraft.presets
      .skuMb0973()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMb0973Preset).toMatchInlineSnapshot();
  });
});
