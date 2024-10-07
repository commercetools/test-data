import { TChannelGraphql, TChannelRest } from '../types';
import { restPreset, graphqlPreset, compatPreset } from './clothes-store';

const restExpectation = (channel: TChannelRest) => {
  expect(channel).toMatchObject({
    key: 'food-store-key',
    name: {
      en: 'Clothes Store',
    },
  });
};

const graphqlExpectation = (channel: TChannelGraphql) => {
  expect(channel).toMatchObject({
    key: 'food-store-key',
    name: 'Clothes Store',
    nameAllLocales: [
      {
        locale: 'en',
        value: 'Clothes Store',
      },
    ],
    __typename: 'Channel',
  });
};

describe('Clothes Store preset', () => {
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
