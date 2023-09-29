import { TCartDraft } from '../../../types';
import sebastianFranklin01 from './sebastian-franklin-01';

describe('with the preset cart `sebastianFranklin01`', () => {
  it('should return a cart draft', () => {
    const cartDraft = sebastianFranklin01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = sebastianFranklin01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = sebastianFranklin01().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
