import {
  Geometry,
  GeometryGraphql,
  GeometryRest,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { CustomFieldBooleanType } from '@commercetools-test-data/type';
import { roles } from './constants';
import type { TChannelRest, TChannelGraphql, TChannel } from './types';
import { Channel, ChannelGraphql, ChannelRest } from './index';

const populateCommon = <
  TModel extends TChannel | TChannelRest | TChannelGraphql,
>(
  model: TBuilder<TModel>
) =>
  model
    .reviewRatingStatistics({
      averageRating: 4.5,
      highestRating: 5,
      lowestRating: 1,
      count: 100,
      ratingsDistribution: { 1: 10, 2: 20, 3: 30, 4: 40, 5: 50 },
    } as TModel['reviewRatingStatistics'])
    .custom(CustomFieldBooleanType.random());

const populateRestModel = (model: TBuilder<TChannelRest>) =>
  populateCommon(model)
    .name(LocalizedString.random().en('Channel name'))
    .description(LocalizedString.random().en('Channel description'))
    .geoLocation(GeometryRest.random());

const populateGraphqlModel = (model: TBuilder<TChannelGraphql>) =>
  populateCommon(model)
    .nameAllLocales(LocalizedString.random().en('Channel name'))
    .descriptionAllLocales(LocalizedString.random().en('Channel description'))
    .geoLocation(GeometryGraphql.random());

const validateCommonFields = (model: TChannelRest | TChannelGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
      reviewRatingStatistics: expect.objectContaining({
        averageRating: 4.5,
        highestRating: 5,
        lowestRating: 1,
        count: 100,
        ratingsDistribution: { 1: 10, 2: 20, 3: 30, 4: 40, 5: 50 },
      }),
      roles: [roles.Primary],
    })
  );
};

const validateRestModel = (model: TChannelRest) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      createdBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      lastModifiedBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      name: expect.objectContaining({
        en: 'Channel name',
      }),
      description: expect.objectContaining({
        en: 'Channel description',
      }),
      address: expect.objectContaining({
        country: expect.any(String),
        city: expect.any(String),
        streetName: expect.any(String),
      }),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      geoLocation: expect.objectContaining({
        type: 'Point',
        coordinates: [expect.any(Number), expect.any(Number)],
      }),
    })
  );
};

const validateGraphqlModel = (model: TChannelGraphql) => {
  validateCommonFields(model);

  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Channel',
      createdBy: expect.objectContaining({
        clientId: expect.any(String),
        customerRef: expect.objectContaining({ typeId: 'customer' }),
        userRef: expect.objectContaining({ typeId: 'user' }),
        __typename: 'Initiator',
      }),
      lastModifiedBy: expect.objectContaining({
        clientId: expect.any(String),
        customerRef: expect.objectContaining({ typeId: 'customer' }),
        userRef: expect.objectContaining({ typeId: 'user' }),
        __typename: 'Initiator',
      }),
      name: 'Channel name',
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Channel name',
          __typename: 'LocalizedString',
        }),
      ]),
      description: 'Channel description',
      descriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Channel description',
          __typename: 'LocalizedString',
        }),
      ]),
      address: expect.objectContaining({
        __typename: 'Address',
      }),
      custom: expect.objectContaining({
        name: 'Boolean',
        __typename: 'BooleanType',
      }),
      geoLocation: expect.objectContaining({
        __typename: 'Geometry',
        coordinates: [expect.any(Number), expect.any(Number)],
      }),
    })
  );
};

describe('Channel model builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(ChannelRest.random()).build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateGraphqlModel(ChannelGraphql.random())
      .geoLocation(GeometryGraphql.random())
      .build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Channel model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = populateRestModel(Channel.random()).buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = populateCommon(
      Channel.random()
        .geoLocation(Geometry.random())
        .name(LocalizedString.random().en('Channel name'))
        .description(LocalizedString.random().en('Channel description'))
    ).buildGraphql<TChannelGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
