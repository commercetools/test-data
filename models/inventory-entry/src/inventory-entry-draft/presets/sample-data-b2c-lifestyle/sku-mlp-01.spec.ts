import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMlp01 preset`, () => {
  it(`should return a skuMlp01 preset when built for rest`, () => {
    const skuMlp01Preset = InventoryEntryDraftRest.presets.skuMlp01().build();
    expect(skuMlp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMlp01 preset when built for graphql`, () => {
    const skuMlp01Preset = InventoryEntryDraftGraphql.presets
      .skuMlp01()
      .build();
    expect(skuMlp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMlp01 preset when built for legacy rest`, () => {
    const skuMlp01Preset = InventoryEntryDraft.presets
      .skuMlp01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMlp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMlp01 preset when built for legacy graphql`, () => {
    const skuMlp01Preset = InventoryEntryDraft.presets
      .skuMlp01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMlp01Preset).toMatchInlineSnapshot();
  });
});
