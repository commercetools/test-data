import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TLocalizedString,
  TAddress,
  TLocalizedStringGraphql,
  TInitiator,
} from '@commercetools-test-data/commons';
import { roles } from './constants';

export type TChannelRole = keyof typeof roles;

export type TReviewRatingStatistics = {
  averageRating: number;
  highestRating: number;
  lowestRating: number;
  count: number;
  ratingsDistribution: Record<string, unknown>;
};
export type TGeoJson = {
  type: 'Point';
  coordinates: [longitude: number, latitude: number];
};

export type TChannelDraft = {
  key: string;
  roles: TChannelRole[];
  name?: TLocalizedString;
  description?: TLocalizedString;
  address?: TAddress;
  reviewRatingStatistics?: TReviewRatingStatistics;
  geoLocation?: TGeoJson;
  // TODO: provide correct type
  custom?: unknown;
};
export type TChannelDraftGraphql = Omit<
  TChannelDraft,
  'name' | 'description'
> & {
  __typename: 'ChannelDraft';
  name?: TLocalizedStringGraphql;
  description?: TLocalizedStringGraphql;
};

export type TChannel = TChannelDraft & {
  id: string;
  version: number;
  createdAt: string;
  lastModifiedAt: string;
  createdBy: TInitiator;
  lastModifiedBy: TInitiator;
  name?: TLocalizedString;
  description?: TLocalizedString;
};

export type TChannelGraphql = Omit<TChannel, 'name' | 'description'> & {
  __typename: 'Channel';
  // name?: string;
  // description?: string;
  nameAllLocales?: TLocalizedStringGraphql;
  descriptionAllLocales?: TLocalizedStringGraphql;
};

export type TChannelBuilder = TBuilder<TChannel>;
export type TChannelDraftBuilder = TBuilder<TChannelDraft>;
export type TCreateChannelBuilder = () => TChannelBuilder;
export type TCreateChannelDraftBuilder = () => TChannelDraftBuilder;
