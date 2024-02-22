import type { TProductDraft } from '../../../types';
import nn456St from './nn-456-st';

describe(`with nn456St preset`, () => {
  it(`should return a nn456St preset`, () => {
    const nn456StPreset = nn456St().build<TProductDraft>();
    expect(nn456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a nn456St preset when built for graphql`, () => {
    const nn456StPresetGraphql = nn456St().buildGraphql<TProductDraft>();
    expect(nn456StPresetGraphql).toMatchInlineSnapshot();
  });
});
