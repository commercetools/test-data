import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSbg09 preset`, () => {
  it(`should return a skuSbg09 preset when built for rest`, () => {
    const skuSbg09Preset = InventoryEntryDraftRest.presets.skuSbg09().build();
    expect(skuSbg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSbg09 preset when built for graphql`, () => {
    const skuSbg09Preset = InventoryEntryDraftGraphql.presets
      .skuSbg09()
      .build();
    expect(skuSbg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSbg09 preset when built for legacy rest`, () => {
    const skuSbg09Preset = InventoryEntryDraft.presets
      .skuSbg09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSbg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSbg09 preset when built for legacy graphql`, () => {
    const skuSbg09Preset = InventoryEntryDraft.presets
      .skuSbg09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSbg09Preset).toMatchInlineSnapshot();
  });
});
