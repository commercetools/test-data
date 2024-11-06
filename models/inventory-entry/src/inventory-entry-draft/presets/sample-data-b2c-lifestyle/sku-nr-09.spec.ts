import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNr09 preset`, () => {
  it(`should return a skuNr09 preset when built for rest`, () => {
    const skuNr09Preset = InventoryEntryDraftRest.presets.skuNr09().build();
    expect(skuNr09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNr09 preset when built for graphql`, () => {
    const skuNr09Preset = InventoryEntryDraftGraphql.presets.skuNr09().build();
    expect(skuNr09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNr09 preset when built for legacy rest`, () => {
    const skuNr09Preset = InventoryEntryDraft.presets
      .skuNr09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNr09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNr09 preset when built for legacy graphql`, () => {
    const skuNr09Preset = InventoryEntryDraft.presets
      .skuNr09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNr09Preset).toMatchInlineSnapshot();
  });
});
