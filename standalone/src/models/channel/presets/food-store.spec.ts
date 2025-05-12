import { TChannelGraphql, TChannelRest } from '../types';
import { restPreset, graphqlPreset, compatPreset } from './food-store';

const restExpectation = (channel: TChannelRest) => {
  expect(channel).toMatchObject({
    key: 'food-store-key',
    name: {
      en: 'Food Store',
      de: 'Lebensmittelgeschäft',
    },
  });
};

const graphqlExpectation = (channel: TChannelGraphql) => {
  expect(channel).toMatchObject({
    key: 'food-store-key',
    name: 'Food Store',
    nameAllLocales: expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: 'Food Store',
      }),
      expect.objectContaining({
        locale: 'de',
        value: 'Lebensmittelgeschäft',
      }),
    ]),
    __typename: 'Channel',
  });
};

describe('Food Store preset', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const clothesStoreChannel = restPreset().build();
    restExpectation(clothesStoreChannel);
  });
  it('[Graphql] should set all specified fields to undefined', () => {
    const clothesStoreChannel = graphqlPreset().build();
    graphqlExpectation(clothesStoreChannel);
  });
  it('[Compat - REST] should set all specified fields to undefined', () => {
    const clothesStoreChannel = compatPreset().buildRest();
    restExpectation(clothesStoreChannel);
  });
  it('[Compat - Graphql] should set all specified fields to undefined', () => {
    const clothesStoreChannel = compatPreset().buildGraphql<TChannelGraphql>();
    graphqlExpectation(clothesStoreChannel);
  });
});
