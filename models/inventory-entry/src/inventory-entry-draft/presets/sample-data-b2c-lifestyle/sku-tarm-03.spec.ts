import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTarm03 preset`, () => {
  it(`should return a skuTarm03 preset when built for rest`, () => {
    const skuTarm03Preset = InventoryEntryDraftRest.presets.skuTarm03().build();
    expect(skuTarm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTarm03 preset when built for graphql`, () => {
    const skuTarm03Preset = InventoryEntryDraftGraphql.presets
      .skuTarm03()
      .build();
    expect(skuTarm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTarm03 preset when built for legacy rest`, () => {
    const skuTarm03Preset = InventoryEntryDraft.presets
      .skuTarm03()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTarm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTarm03 preset when built for legacy graphql`, () => {
    const skuTarm03Preset = InventoryEntryDraft.presets
      .skuTarm03()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTarm03Preset).toMatchInlineSnapshot();
  });
});
