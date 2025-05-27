import { TStoreDraftGraphql, TStoreDraftRest } from '../../types';
import { emptyDraftRest, emptyDraftGraphql, empty } from './empty';

it('should set all specified fields to undefined', () => {
  const emptyStoreDraft = empty().build<TStoreDraftRest | TStoreDraftGraphql>();
  expect(emptyStoreDraft).toMatchObject({
    key: expect.any(String),
    name: undefined,
    languages: undefined,
    countries: undefined,
    distributionChannels: undefined,
    supplyChannels: undefined,
    productSelections: undefined,
    custom: undefined,
  });
});

it('should set all specified fields to undefined in graphql', () => {
  const emptyStoreDraft =
    emptyDraftGraphql().buildGraphql<TStoreDraftGraphql>();
  expect(emptyStoreDraft).toMatchObject({
    key: expect.any(String),
    name: undefined,
    languages: undefined,
    countries: undefined,
    distributionChannels: undefined,
    supplyChannels: undefined,
    productSelections: undefined,
    custom: undefined,
  });
});

it('should set all specified fields to undefined in rest', () => {
  const emptyStoreDraft = emptyDraftRest().build<
    TStoreDraftRest | TStoreDraftGraphql
  >();
  expect(emptyStoreDraft).toMatchObject({
    key: expect.any(String),
    name: undefined,
    languages: undefined,
    countries: undefined,
    distributionChannels: undefined,
    supplyChannels: undefined,
    productSelections: undefined,
    custom: undefined,
  });
});
