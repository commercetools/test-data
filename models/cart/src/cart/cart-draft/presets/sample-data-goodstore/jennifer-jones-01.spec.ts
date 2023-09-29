import { TCartDraft } from '../../../types';
import jenniferJones01 from './jennifer-jones-01';

describe('with the preset cart `jenniferJones01`', () => {
  it('should return a cart draft', () => {
    const cartDraft = jenniferJones01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('without customer ID, should return a cart draft', () => {
    const cartDraft = jenniferJones01().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });

  it('should return a cart draft when build for GraphQL', () => {
    const cartDraft = jenniferJones01().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot();
  });
});
