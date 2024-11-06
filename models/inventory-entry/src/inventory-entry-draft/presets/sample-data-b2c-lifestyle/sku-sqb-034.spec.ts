import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSqb034 preset`, () => {
  it(`should return a skuSqb034 preset when built for rest`, () => {
    const skuSqb034Preset = InventoryEntryDraftRest.presets.skuSqb034().build();
    expect(skuSqb034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSqb034 preset when built for graphql`, () => {
    const skuSqb034Preset = InventoryEntryDraftGraphql.presets
      .skuSqb034()
      .build();
    expect(skuSqb034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSqb034 preset when built for legacy rest`, () => {
    const skuSqb034Preset = InventoryEntryDraft.presets
      .skuSqb034()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSqb034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSqb034 preset when built for legacy graphql`, () => {
    const skuSqb034Preset = InventoryEntryDraft.presets
      .skuSqb034()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSqb034Preset).toMatchInlineSnapshot();
  });
});
