import { buildReferencePresets } from './reference-presets-builder';

const presets = buildReferencePresets('associate-role');

describe('AssociateRoleReference preset', () => {
  it('should build a REST model', () => {
    const restModel = presets.restPreset().build();
    expect(restModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
      obj: expect.objectContaining({ id: expect.any(String) }),
    });
  });

  it('should build a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();
    expect(graphqlModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
      __typename: 'Reference',
    });
  });

  it('should build a compatibility model', () => {
    const compatModel = presets.compatPreset().build();
    expect(compatModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
      obj: expect.objectContaining({ id: expect.any(String) }),
    });
  });

  it('should build a compatibility REST model', () => {
    const compatModel = presets.compatPreset().buildRest();
    expect(compatModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
      obj: expect.objectContaining({ id: expect.any(String) }),
    });
  });

  it('should build a compatibility GraphQL model', () => {
    const compatModel = presets.compatPreset().buildGraphql();
    expect(compatModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
      __typename: 'Reference',
    });
  });
});
