import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBlpc09 preset`, () => {
  it(`should return a skuBlpc09 preset when built for rest`, () => {
    const skuBlpc09Preset = InventoryEntryDraftRest.presets.skuBlpc09().build();
    expect(skuBlpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBlpc09 preset when built for graphql`, () => {
    const skuBlpc09Preset = InventoryEntryDraftGraphql.presets
      .skuBlpc09()
      .build();
    expect(skuBlpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBlpc09 preset when built for legacy rest`, () => {
    const skuBlpc09Preset = InventoryEntryDraft.presets
      .skuBlpc09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBlpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBlpc09 preset when built for legacy graphql`, () => {
    const skuBlpc09Preset = InventoryEntryDraft.presets
      .skuBlpc09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBlpc09Preset).toMatchInlineSnapshot();
  });
});
