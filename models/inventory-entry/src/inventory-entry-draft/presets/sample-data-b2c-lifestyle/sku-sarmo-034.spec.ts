import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSarmo034 preset`, () => {
  it(`should return a skuSarmo034 preset when built for rest`, () => {
    const skuSarmo034Preset = InventoryEntryDraftRest.presets
      .skuSarmo034()
      .build();
    expect(skuSarmo034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSarmo034 preset when built for graphql`, () => {
    const skuSarmo034Preset = InventoryEntryDraftGraphql.presets
      .skuSarmo034()
      .build();
    expect(skuSarmo034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSarmo034 preset when built for legacy rest`, () => {
    const skuSarmo034Preset = InventoryEntryDraft.presets
      .skuSarmo034()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSarmo034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSarmo034 preset when built for legacy graphql`, () => {
    const skuSarmo034Preset = InventoryEntryDraft.presets
      .skuSarmo034()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSarmo034Preset).toMatchInlineSnapshot();
  });
});
