import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtd from './lifttech-solutions-ltd';

describe(`with lifttechSolutionsLtd preset`, () => {
  it(`should return a lifttechSolutionsLtd preset`, () => {
    const lifttechSolutionsLtdPreset =
      lifttechSolutionsLtd().build<TAddressDraft>();
    expect(lifttechSolutionsLtdPreset).toMatchInlineSnapshot();
  });

  it(`should return a lifttechSolutionsLtd preset when built for graphql`, () => {
    const lifttechSolutionsLtdPresetGraphql =
      lifttechSolutionsLtd().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdPresetGraphql).toMatchInlineSnapshot();
  });
});
