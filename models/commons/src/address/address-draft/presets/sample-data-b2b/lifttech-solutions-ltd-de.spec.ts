import type { TAddressDraft } from '../../../types';
import lifttechSolutionsLtdDe from './lifttech-solutions-ltd-de';

describe(`with lifttechSolutionsLtdDe preset`, () => {
  it(`should return a lifttechSolutionsLtdDe preset`, () => {
    const lifttechSolutionsLtdDePreset =
      lifttechSolutionsLtdDe().build<TAddressDraft>();
    expect(lifttechSolutionsLtdDePreset).toMatchInlineSnapshot();
  });

  it(`should return a lifttechSolutionsLtdDe preset when built for graphql`, () => {
    const lifttechSolutionsLtdDePresetGraphql =
      lifttechSolutionsLtdDe().buildGraphql<TAddressDraft>();
    expect(lifttechSolutionsLtdDePresetGraphql).toMatchInlineSnapshot();
  });
});
