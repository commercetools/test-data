import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBarm03 preset`, () => {
  it(`should return a skuBarm03 preset when built for rest`, () => {
    const skuBarm03Preset = InventoryEntryDraftRest.presets.skuBarm03().build();
    expect(skuBarm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBarm03 preset when built for graphql`, () => {
    const skuBarm03Preset = InventoryEntryDraftGraphql.presets
      .skuBarm03()
      .build();
    expect(skuBarm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBarm03 preset when built for legacy rest`, () => {
    const skuBarm03Preset = InventoryEntryDraft.presets
      .skuBarm03()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBarm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBarm03 preset when built for legacy graphql`, () => {
    const skuBarm03Preset = InventoryEntryDraft.presets
      .skuBarm03()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBarm03Preset).toMatchInlineSnapshot();
  });
});
