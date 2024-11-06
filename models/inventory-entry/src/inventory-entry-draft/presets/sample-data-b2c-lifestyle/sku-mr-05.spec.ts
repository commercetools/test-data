import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMr05 preset`, () => {
  it(`should return a skuMr05 preset when built for rest`, () => {
    const skuMr05Preset = InventoryEntryDraftRest.presets.skuMr05().build();
    expect(skuMr05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMr05 preset when built for graphql`, () => {
    const skuMr05Preset = InventoryEntryDraftGraphql.presets.skuMr05().build();
    expect(skuMr05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMr05 preset when built for legacy rest`, () => {
    const skuMr05Preset = InventoryEntryDraft.presets
      .skuMr05()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMr05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMr05 preset when built for legacy graphql`, () => {
    const skuMr05Preset = InventoryEntryDraft.presets
      .skuMr05()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMr05Preset).toMatchInlineSnapshot();
  });
});
