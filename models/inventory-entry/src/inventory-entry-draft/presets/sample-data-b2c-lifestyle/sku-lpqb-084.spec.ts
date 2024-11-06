import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLpqb084 preset`, () => {
  it(`should return a skuLpqb084 preset when built for rest`, () => {
    const skuLpqb084Preset = InventoryEntryDraftRest.presets
      .skuLpqb084()
      .build();
    expect(skuLpqb084Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpqb084 preset when built for graphql`, () => {
    const skuLpqb084Preset = InventoryEntryDraftGraphql.presets
      .skuLpqb084()
      .build();
    expect(skuLpqb084Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpqb084 preset when built for legacy rest`, () => {
    const skuLpqb084Preset = InventoryEntryDraft.presets
      .skuLpqb084()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLpqb084Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpqb084 preset when built for legacy graphql`, () => {
    const skuLpqb084Preset = InventoryEntryDraft.presets
      .skuLpqb084()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLpqb084Preset).toMatchInlineSnapshot();
  });
});
