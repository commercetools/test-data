import { ContactInformationGraphql } from './index';

describe('ContactInformationGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel = ContactInformationGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ContactInformation',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        email: expect.any(String),
        verifiedEmail: null,
      })
    );
  });
});
