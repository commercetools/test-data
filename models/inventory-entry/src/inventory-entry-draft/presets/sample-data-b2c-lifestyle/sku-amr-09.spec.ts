import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAmr09 preset`, () => {
  it(`should return a skuAmr09 preset when built for rest`, () => {
    const skuAmr09Preset = InventoryEntryDraftRest.presets.skuAmr09().build();
    expect(skuAmr09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAmr09 preset when built for graphql`, () => {
    const skuAmr09Preset = InventoryEntryDraftGraphql.presets
      .skuAmr09()
      .build();
    expect(skuAmr09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAmr09 preset when built for legacy rest`, () => {
    const skuAmr09Preset = InventoryEntryDraft.presets
      .skuAmr09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAmr09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAmr09 preset when built for legacy graphql`, () => {
    const skuAmr09Preset = InventoryEntryDraft.presets
      .skuAmr09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAmr09Preset).toMatchInlineSnapshot();
  });
});
