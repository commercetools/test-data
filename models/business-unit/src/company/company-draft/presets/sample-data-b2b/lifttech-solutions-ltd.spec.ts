import type { TCompanyDraft } from '../../../types';
import lifttechSolutionsLtd from './lifttech-solutions-ltd';

describe(`with lifttechSolutionsLtd preset`, () => {
  it(`should return a lifttechSolutionsLtd preset`, () => {
    const lifttechSolutionsLtdPreset =
      lifttechSolutionsLtd().build<TCompanyDraft>();
    expect(lifttechSolutionsLtdPreset).toMatchInlineSnapshot();
  });

  it(`should return a lifttechSolutionsLtd preset when built for graphql`, () => {
    const lifttechSolutionsLtdPresetGraphql =
      lifttechSolutionsLtd().buildGraphql<TCompanyDraft>();
    expect(lifttechSolutionsLtdPresetGraphql).toMatchInlineSnapshot();
  });
});
