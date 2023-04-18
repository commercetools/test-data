import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import jamieDoe from './jamie-doe';

describe('with the preset `jamieDoe`', () => {
  it('should return a address draft', () => {
    const address = jamieDoe().build<TAddressDraft>();

    expect(address.firstName).toMatchInlineSnapshot(`"Jamie"`);
    expect(address.lastName).toMatchInlineSnapshot(`"Doe"`);
    expect(address.streetName).toMatchInlineSnapshot(`"Main Street"`);
    expect(address.streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(address.postalCode).toMatchInlineSnapshot(`"56789"`);
    expect(address.city).toMatchInlineSnapshot(`"Mainville"`);
    expect(address.state).toMatchInlineSnapshot(`"New Jersey"`);
    expect(address.country).toMatchInlineSnapshot(`"US"`);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = jamieDoe().buildGraphql<TAddressDraftGraphql>();

    expect(address.firstName).toMatchInlineSnapshot(`"Jamie"`);
    expect(address.lastName).toMatchInlineSnapshot(`"Doe"`);
    expect(address.streetName).toMatchInlineSnapshot(`"Main Street"`);
    expect(address.streetNumber).toMatchInlineSnapshot(`"1"`);
    expect(address.postalCode).toMatchInlineSnapshot(`"56789"`);
    expect(address.city).toMatchInlineSnapshot(`"Mainville"`);
    expect(address.state).toMatchInlineSnapshot(`"New Jersey"`);
    expect(address.country).toMatchInlineSnapshot(`"US"`);
  });
});
