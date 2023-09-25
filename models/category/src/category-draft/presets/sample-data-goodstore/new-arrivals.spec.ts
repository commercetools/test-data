import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import newArrivals from './new-arrivals';
describe(`with newArrivals preset`, () => {
  it('should create a newArrivals category type draft', () => {
    const newArrivalsPreset = newArrivals().build<TCategoryDraft>();
    expect(newArrivalsPreset).toMatchObject(
      JSON.parse(`{
  "key": "new-arrivals",
  "name": {
    "en-GB": "New Arrivals",
    "de-DE": "Neuheiten",
    "en-US": "New Arrivals"
  },
  "orderHint": "0.4",
  "slug": {
    "en-GB": "new-arrivals",
    "de-DE": "ganz-neu",
    "en-US": "new-arrivals"
  }
}`)
    );
  });
});
