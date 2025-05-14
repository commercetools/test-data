import type { TBuilder } from '@/core';

type KeyReference = {
  typeId: string;
  key: string;
};

export type TKeyReference = KeyReference;
export type TKeyReferenceGraphql = TKeyReference & {
  __typename: 'Reference';
};

export type TKeyReferenceBuilder = TBuilder<KeyReference>;
export type TCreateKeyReferenceBuilder = () => TKeyReferenceBuilder;

type KeyReferenceDraft = {
  typeId: string;
  key: string;
};

export type TKeyReferenceDraft = KeyReferenceDraft;
export type TKeyReferenceDraftGraphql = TKeyReferenceDraft;

export type TKeyReferenceDraftBuilder = TBuilder<KeyReferenceDraft>;
export type TCreateKeyReferenceDraftBuilder = () => TKeyReferenceDraftBuilder;
