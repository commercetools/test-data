import { buildReferenceDraftPresets } from './reference-draft-presets-builder';

const presets = buildReferenceDraftPresets('associate-role');

describe('AssociateRoleReference preset', () => {
  it('should build a REST model', () => {
    const restModel = presets.restPreset().build();
    expect(restModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
    });
  });

  it('should build a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();
    expect(graphqlModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
    });
  });

  it('should build a compatibility model', () => {
    const compatModel = presets.compatPreset().build();
    expect(compatModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
    });
  });

  it('should build a compatibility REST model', () => {
    const compatModel = presets.compatPreset().buildRest();
    expect(compatModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
    });
  });

  it('should build a compatibility GraphQL model', () => {
    const compatModel = presets.compatPreset().buildGraphql();
    expect(compatModel).toEqual({
      id: expect.any(String),
      typeId: 'associate-role',
    });
  });
});
