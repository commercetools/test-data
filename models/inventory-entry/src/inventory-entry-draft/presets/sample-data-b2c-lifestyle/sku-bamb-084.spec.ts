import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBamb084 preset`, () => {
  it(`should return a skuBamb084 preset when built for rest`, () => {
    const skuBamb084Preset = InventoryEntryDraftRest.presets
      .skuBamb084()
      .build();
    expect(skuBamb084Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBamb084 preset when built for graphql`, () => {
    const skuBamb084Preset = InventoryEntryDraftGraphql.presets
      .skuBamb084()
      .build();
    expect(skuBamb084Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBamb084 preset when built for legacy rest`, () => {
    const skuBamb084Preset = InventoryEntryDraft.presets
      .skuBamb084()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBamb084Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBamb084 preset when built for legacy graphql`, () => {
    const skuBamb084Preset = InventoryEntryDraft.presets
      .skuBamb084()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBamb084Preset).toMatchInlineSnapshot();
  });
});
