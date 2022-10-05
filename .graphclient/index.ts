// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**
 * Collection
 *
 */
export type Collection = {
  /** ID (collection address) */
  id: Scalars['ID'];
  /** Total number of transactions */
  totalTransactions: Scalars['BigInt'];
  /** Total number of taker bid transactions */
  totalTakerBidTransactions: Scalars['BigInt'];
  /** Total number of taker ask transactions */
  totalTakerAskTransactions: Scalars['BigInt'];
  /** Total volume of collection (in ETH) */
  totalVolume: Scalars['BigDecimal'];
  /** Total taker bid volume (in ETH) */
  totalTakerBidVolume: Scalars['BigDecimal'];
  /** Total taker ask volume (in ETH) */
  totalTakerAskVolume: Scalars['BigDecimal'];
  /** Total royalty paid (in ETH) */
  totalRoyaltyPaid: Scalars['BigDecimal'];
  /** Daily history */
  dayData: Array<CollectionDailyData>;
  /** Royalty transfers */
  royaltyTransfers: Array<RoyaltyTransfer>;
  /** Transactions */
  transactions: Array<Transaction>;
};


/**
 * Collection
 *
 */
export type CollectiondayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectionDailyData_filter>;
};


/**
 * Collection
 *
 */
export type CollectionroyaltyTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
};


/**
 * Collection
 *
 */
export type CollectiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};

/**
 * CollectionDailyData
 *
 */
export type CollectionDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** Collection */
  collection: Collection;
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily unique taker bid transactions */
  dailyTakerBidTransactions: Scalars['BigInt'];
  /** Daily unique taker ask transactions */
  dailyTakerAskTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily taker bid volume (in ETH) */
  dailyTakerBidVolume: Scalars['BigDecimal'];
  /** Daily taker ask volume (in ETH) */
  dailyTakerAskVolume: Scalars['BigDecimal'];
  /** Daily volume (in ETH) excluding zero-fee strategy */
  dailyVolumeExcludingZeroFee: Scalars['BigDecimal'];
  /** Royalty payment (in ETH) */
  dailyRoyalty: Scalars['BigDecimal'];
};

export type CollectionDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<Collection_filter>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRoyalty?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRoyalty_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type CollectionDailyData_orderBy =
  | 'id'
  | 'date'
  | 'collection'
  | 'dailyTransactions'
  | 'dailyTakerBidTransactions'
  | 'dailyTakerAskTransactions'
  | 'dailyVolume'
  | 'dailyTakerBidVolume'
  | 'dailyTakerAskVolume'
  | 'dailyVolumeExcludingZeroFee'
  | 'dailyRoyalty';

export type Collection_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyPaid?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyPaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dayData_?: InputMaybe<CollectionDailyData_filter>;
  royaltyTransfers_?: InputMaybe<RoyaltyTransfer_filter>;
  transactions_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Collection_orderBy =
  | 'id'
  | 'totalTransactions'
  | 'totalTakerBidTransactions'
  | 'totalTakerAskTransactions'
  | 'totalVolume'
  | 'totalTakerBidVolume'
  | 'totalTakerAskVolume'
  | 'totalRoyaltyPaid'
  | 'dayData'
  | 'royaltyTransfers'
  | 'transactions';

/**
 * ExchangeDailyData
 *
 */
export type ExchangeDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** Daily unique users */
  dailyUsers: Scalars['BigInt'];
  /** Daily unique collections traded */
  dailyCollections: Scalars['BigInt'];
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily taker ask transactions */
  dailyTakerBidTransactions: Scalars['BigInt'];
  /** Daily taker ask transactions */
  dailyTakerAskTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily taker bid volume (in ETH) */
  dailyTakerBidVolume: Scalars['BigDecimal'];
  /** Daily taker ask volume (in ETH) */
  dailyTakerAskVolume: Scalars['BigDecimal'];
  /** Daily volume (in ETH) excluding zero-fee strategy */
  dailyVolumeExcludingZeroFee: Scalars['BigDecimal'];
};

export type ExchangeDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyUsers?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_not?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_gt?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_lt?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_gte?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_lte?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyUsers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyCollections?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_not?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_gt?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_lt?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_gte?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_lte?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyCollections_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ExchangeDailyData_orderBy =
  | 'id'
  | 'date'
  | 'dailyUsers'
  | 'dailyCollections'
  | 'dailyTransactions'
  | 'dailyTakerBidTransactions'
  | 'dailyTakerAskTransactions'
  | 'dailyVolume'
  | 'dailyTakerBidVolume'
  | 'dailyTakerAskVolume'
  | 'dailyVolumeExcludingZeroFee';

/**
 * ExecutionStrategy
 *
 */
export type ExecutionStrategy = {
  /** ID (execution strategy address) */
  id: Scalars['ID'];
  /** Protocol fee (e.g., 500 --> 5%) */
  protocolFee: Scalars['BigInt'];
  /** Total number of transactions */
  totalTransactions: Scalars['BigInt'];
  /** Total number of taker bid transactions */
  totalTakerBidTransactions: Scalars['BigInt'];
  /** Total number of taker ask transactions */
  totalTakerAskTransactions: Scalars['BigInt'];
  /** Total volume (in ETH) */
  totalVolume: Scalars['BigDecimal'];
  /** Total taker bid volume (in ETH) */
  totalTakerBidVolume: Scalars['BigDecimal'];
  /** Total taker ask volume (in ETH) */
  totalTakerAskVolume: Scalars['BigDecimal'];
  /** Daily history */
  dayData: Array<ExecutionStrategyDailyData>;
  /** Transactions */
  transactions: Array<Transaction>;
};


/**
 * ExecutionStrategy
 *
 */
export type ExecutionStrategydayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategyDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategyDailyData_filter>;
};


/**
 * ExecutionStrategy
 *
 */
export type ExecutionStrategytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};

/**
 * ExecutionStrategyDailyData
 *
 */
export type ExecutionStrategyDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Execution strategy */
  strategy: ExecutionStrategy;
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily unique taker bid transactions */
  dailyTakerBidTransactions: Scalars['BigInt'];
  /** Daily unique taker bid transactions */
  dailyTakerAskTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily taker bid volume (in ETH) */
  dailyTakerBidVolume: Scalars['BigDecimal'];
  /** Daily taker ask volume (in ETH) */
  dailyTakerAskVolume: Scalars['BigDecimal'];
};

export type ExecutionStrategyDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<ExecutionStrategy_filter>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ExecutionStrategyDailyData_orderBy =
  | 'id'
  | 'strategy'
  | 'date'
  | 'dailyTransactions'
  | 'dailyTakerBidTransactions'
  | 'dailyTakerAskTransactions'
  | 'dailyVolume'
  | 'dailyTakerBidVolume'
  | 'dailyTakerAskVolume';

export type ExecutionStrategy_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocolFee?: InputMaybe<Scalars['BigInt']>;
  protocolFee_not?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dayData_?: InputMaybe<ExecutionStrategyDailyData_filter>;
  transactions_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ExecutionStrategy_orderBy =
  | 'id'
  | 'protocolFee'
  | 'totalTransactions'
  | 'totalTakerBidTransactions'
  | 'totalTakerAskTransactions'
  | 'totalVolume'
  | 'totalTakerBidVolume'
  | 'totalTakerAskVolume'
  | 'dayData'
  | 'transactions';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  executionStrategy?: Maybe<ExecutionStrategy>;
  executionStrategies: Array<ExecutionStrategy>;
  user?: Maybe<User>;
  users: Array<User>;
  collectionDailyData?: Maybe<CollectionDailyData>;
  collectionDailyDatas: Array<CollectionDailyData>;
  exchangeDailyData?: Maybe<ExchangeDailyData>;
  exchangeDailyDatas: Array<ExchangeDailyData>;
  executionStrategyDailyData?: Maybe<ExecutionStrategyDailyData>;
  executionStrategyDailyDatas: Array<ExecutionStrategyDailyData>;
  userDailyData?: Maybe<UserDailyData>;
  userDailyDatas: Array<UserDailyData>;
  royaltyTransfer?: Maybe<RoyaltyTransfer>;
  royaltyTransfers: Array<RoyaltyTransfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectionDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexchangeDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexchangeDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExchangeDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExchangeDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategyDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategyDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategyDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategyDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroyaltyTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroyaltyTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

/**
 * RoyaltyTransfer
 *
 */
export type RoyaltyTransfer = {
  /** ID */
  id: Scalars['ID'];
  /** Date (timestamp) */
  date: Scalars['BigInt'];
  /** Block number */
  block: Scalars['BigInt'];
  /** Collection */
  collection: Collection;
  /** TokenId */
  tokenId: Scalars['BigInt'];
  /** User */
  user: User;
  /** Amount received (in ETH) */
  amount: Scalars['BigDecimal'];
};

export type RoyaltyTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<Collection_filter>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RoyaltyTransfer_orderBy =
  | 'id'
  | 'date'
  | 'block'
  | 'collection'
  | 'tokenId'
  | 'user'
  | 'amount';

export type Subscription = {
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  executionStrategy?: Maybe<ExecutionStrategy>;
  executionStrategies: Array<ExecutionStrategy>;
  user?: Maybe<User>;
  users: Array<User>;
  collectionDailyData?: Maybe<CollectionDailyData>;
  collectionDailyDatas: Array<CollectionDailyData>;
  exchangeDailyData?: Maybe<ExchangeDailyData>;
  exchangeDailyDatas: Array<ExchangeDailyData>;
  executionStrategyDailyData?: Maybe<ExecutionStrategyDailyData>;
  executionStrategyDailyDatas: Array<ExecutionStrategyDailyData>;
  userDailyData?: Maybe<UserDailyData>;
  userDailyDatas: Array<UserDailyData>;
  royaltyTransfer?: Maybe<RoyaltyTransfer>;
  royaltyTransfers: Array<RoyaltyTransfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectionDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexchangeDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexchangeDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExchangeDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExchangeDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategyDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategyDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategyDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategyDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroyaltyTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroyaltyTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

/**
 * Transaction
 *
 */
export type Transaction = {
  /** ID */
  id: Scalars['ID'];
  /** Date (timestamp) */
  date: Scalars['BigInt'];
  /** Block number */
  block: Scalars['BigInt'];
  /** Collection */
  collection: Collection;
  /** Whether the transaction is a takerAsk */
  isTakerAsk: Scalars['Boolean'];
  /** Execution strategy */
  strategy: ExecutionStrategy;
  /** TokenId */
  tokenId: Scalars['BigInt'];
  /** Price (in ETH) */
  price: Scalars['BigDecimal'];
  /** Maker user */
  maker: User;
  /** Taker user */
  taker: User;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<Collection_filter>;
  isTakerAsk?: InputMaybe<Scalars['Boolean']>;
  isTakerAsk_not?: InputMaybe<Scalars['Boolean']>;
  isTakerAsk_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isTakerAsk_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<ExecutionStrategy_filter>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maker?: InputMaybe<Scalars['String']>;
  maker_not?: InputMaybe<Scalars['String']>;
  maker_gt?: InputMaybe<Scalars['String']>;
  maker_lt?: InputMaybe<Scalars['String']>;
  maker_gte?: InputMaybe<Scalars['String']>;
  maker_lte?: InputMaybe<Scalars['String']>;
  maker_in?: InputMaybe<Array<Scalars['String']>>;
  maker_not_in?: InputMaybe<Array<Scalars['String']>>;
  maker_contains?: InputMaybe<Scalars['String']>;
  maker_contains_nocase?: InputMaybe<Scalars['String']>;
  maker_not_contains?: InputMaybe<Scalars['String']>;
  maker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  maker_starts_with?: InputMaybe<Scalars['String']>;
  maker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  maker_not_starts_with?: InputMaybe<Scalars['String']>;
  maker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  maker_ends_with?: InputMaybe<Scalars['String']>;
  maker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  maker_not_ends_with?: InputMaybe<Scalars['String']>;
  maker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  maker_?: InputMaybe<User_filter>;
  taker?: InputMaybe<Scalars['String']>;
  taker_not?: InputMaybe<Scalars['String']>;
  taker_gt?: InputMaybe<Scalars['String']>;
  taker_lt?: InputMaybe<Scalars['String']>;
  taker_gte?: InputMaybe<Scalars['String']>;
  taker_lte?: InputMaybe<Scalars['String']>;
  taker_in?: InputMaybe<Array<Scalars['String']>>;
  taker_not_in?: InputMaybe<Array<Scalars['String']>>;
  taker_contains?: InputMaybe<Scalars['String']>;
  taker_contains_nocase?: InputMaybe<Scalars['String']>;
  taker_not_contains?: InputMaybe<Scalars['String']>;
  taker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  taker_starts_with?: InputMaybe<Scalars['String']>;
  taker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  taker_not_starts_with?: InputMaybe<Scalars['String']>;
  taker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  taker_ends_with?: InputMaybe<Scalars['String']>;
  taker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  taker_not_ends_with?: InputMaybe<Scalars['String']>;
  taker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  taker_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'date'
  | 'block'
  | 'collection'
  | 'isTakerAsk'
  | 'strategy'
  | 'tokenId'
  | 'price'
  | 'maker'
  | 'taker';

/**
 * User
 *
 */
export type User = {
  /** ID (user address) */
  id: Scalars['ID'];
  /** Total number of transactions */
  totalTransactions: Scalars['BigInt'];
  /** Total ask volume (in ETH) */
  totalAskVolume: Scalars['BigDecimal'];
  /** Total bid volume (in ETH) */
  totalBidVolume: Scalars['BigDecimal'];
  /** Total maker volume (in ETH) */
  totalMakerVolume: Scalars['BigDecimal'];
  /** Total taker volume (in ETH) */
  totalTakerVolume: Scalars['BigDecimal'];
  /** Total volume (in ETH) */
  totalVolume: Scalars['BigDecimal'];
  /** Total royalty collected (in ETH) */
  totalRoyaltyCollected: Scalars['BigDecimal'];
  /** Daily history */
  dayData: Array<UserDailyData>;
  /** Transactions where user is the maker side */
  makerTransactions: Array<Transaction>;
  /** Transactions where user is the taker side */
  takerTransactions: Array<Transaction>;
  /** Royalty payments collected by the user (as recipient) */
  royaltyPayments: Array<RoyaltyTransfer>;
};


/**
 * User
 *
 */
export type UserdayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDailyData_filter>;
};


/**
 * User
 *
 */
export type UsermakerTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};


/**
 * User
 *
 */
export type UsertakerTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};


/**
 * User
 *
 */
export type UserroyaltyPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
};

/**
 * UserDailyData
 *
 */
export type UserDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** User */
  user: User;
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily volume (in ETH) excluding zero-fee strategy */
  dailyVolumeExcludingZeroFee: Scalars['BigDecimal'];
};

export type UserDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UserDailyData_orderBy =
  | 'id'
  | 'date'
  | 'user'
  | 'dailyTransactions'
  | 'dailyVolume'
  | 'dailyVolumeExcludingZeroFee';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalMakerVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalMakerVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyCollected?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyCollected_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dayData_?: InputMaybe<UserDailyData_filter>;
  makerTransactions_?: InputMaybe<Transaction_filter>;
  takerTransactions_?: InputMaybe<Transaction_filter>;
  royaltyPayments_?: InputMaybe<RoyaltyTransfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type User_orderBy =
  | 'id'
  | 'totalTransactions'
  | 'totalAskVolume'
  | 'totalBidVolume'
  | 'totalMakerVolume'
  | 'totalTakerVolume'
  | 'totalVolume'
  | 'totalRoyaltyCollected'
  | 'dayData'
  | 'makerTransactions'
  | 'takerTransactions'
  | 'royaltyPayments';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars['String']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionDailyData: ResolverTypeWrapper<CollectionDailyData>;
  CollectionDailyData_filter: CollectionDailyData_filter;
  CollectionDailyData_orderBy: CollectionDailyData_orderBy;
  Collection_filter: Collection_filter;
  Collection_orderBy: Collection_orderBy;
  ExchangeDailyData: ResolverTypeWrapper<ExchangeDailyData>;
  ExchangeDailyData_filter: ExchangeDailyData_filter;
  ExchangeDailyData_orderBy: ExchangeDailyData_orderBy;
  ExecutionStrategy: ResolverTypeWrapper<ExecutionStrategy>;
  ExecutionStrategyDailyData: ResolverTypeWrapper<ExecutionStrategyDailyData>;
  ExecutionStrategyDailyData_filter: ExecutionStrategyDailyData_filter;
  ExecutionStrategyDailyData_orderBy: ExecutionStrategyDailyData_orderBy;
  ExecutionStrategy_filter: ExecutionStrategy_filter;
  ExecutionStrategy_orderBy: ExecutionStrategy_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  RoyaltyTransfer: ResolverTypeWrapper<RoyaltyTransfer>;
  RoyaltyTransfer_filter: RoyaltyTransfer_filter;
  RoyaltyTransfer_orderBy: RoyaltyTransfer_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  User: ResolverTypeWrapper<User>;
  UserDailyData: ResolverTypeWrapper<UserDailyData>;
  UserDailyData_filter: UserDailyData_filter;
  UserDailyData_orderBy: UserDailyData_orderBy;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Collection: Collection;
  CollectionDailyData: CollectionDailyData;
  CollectionDailyData_filter: CollectionDailyData_filter;
  Collection_filter: Collection_filter;
  ExchangeDailyData: ExchangeDailyData;
  ExchangeDailyData_filter: ExchangeDailyData_filter;
  ExecutionStrategy: ExecutionStrategy;
  ExecutionStrategyDailyData: ExecutionStrategyDailyData;
  ExecutionStrategyDailyData_filter: ExecutionStrategyDailyData_filter;
  ExecutionStrategy_filter: ExecutionStrategy_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  RoyaltyTransfer: RoyaltyTransfer;
  RoyaltyTransfer_filter: RoyaltyTransfer_filter;
  String: Scalars['String'];
  Subscription: {};
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  User: User;
  UserDailyData: UserDailyData;
  UserDailyData_filter: UserDailyData_filter;
  User_filter: User_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CollectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTakerBidTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTakerAskTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalTakerBidVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalTakerAskVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalRoyaltyPaid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dayData?: Resolver<Array<ResolversTypes['CollectionDailyData']>, ParentType, ContextType, RequireFields<CollectiondayDataArgs, 'skip' | 'first'>>;
  royaltyTransfers?: Resolver<Array<ResolversTypes['RoyaltyTransfer']>, ParentType, ContextType, RequireFields<CollectionroyaltyTransfersArgs, 'skip' | 'first'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<CollectiontransactionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionDailyDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollectionDailyData'] = ResolversParentTypes['CollectionDailyData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  dailyTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTakerBidTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTakerAskTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTakerBidVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTakerAskVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeExcludingZeroFee?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyRoyalty?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExchangeDailyDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExchangeDailyData'] = ResolversParentTypes['ExchangeDailyData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyUsers?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyCollections?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTakerBidTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTakerAskTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTakerBidVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTakerAskVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeExcludingZeroFee?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExecutionStrategyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExecutionStrategy'] = ResolversParentTypes['ExecutionStrategy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocolFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTakerBidTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTakerAskTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalTakerBidVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalTakerAskVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dayData?: Resolver<Array<ResolversTypes['ExecutionStrategyDailyData']>, ParentType, ContextType, RequireFields<ExecutionStrategydayDataArgs, 'skip' | 'first'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<ExecutionStrategytransactionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExecutionStrategyDailyDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExecutionStrategyDailyData'] = ResolversParentTypes['ExecutionStrategyDailyData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['ExecutionStrategy'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTakerBidTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyTakerAskTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTakerBidVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTakerAskVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QuerycollectionArgs, 'id' | 'subgraphError'>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QuerycollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  executionStrategy?: Resolver<Maybe<ResolversTypes['ExecutionStrategy']>, ParentType, ContextType, RequireFields<QueryexecutionStrategyArgs, 'id' | 'subgraphError'>>;
  executionStrategies?: Resolver<Array<ResolversTypes['ExecutionStrategy']>, ParentType, ContextType, RequireFields<QueryexecutionStrategiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  collectionDailyData?: Resolver<Maybe<ResolversTypes['CollectionDailyData']>, ParentType, ContextType, RequireFields<QuerycollectionDailyDataArgs, 'id' | 'subgraphError'>>;
  collectionDailyDatas?: Resolver<Array<ResolversTypes['CollectionDailyData']>, ParentType, ContextType, RequireFields<QuerycollectionDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  exchangeDailyData?: Resolver<Maybe<ResolversTypes['ExchangeDailyData']>, ParentType, ContextType, RequireFields<QueryexchangeDailyDataArgs, 'id' | 'subgraphError'>>;
  exchangeDailyDatas?: Resolver<Array<ResolversTypes['ExchangeDailyData']>, ParentType, ContextType, RequireFields<QueryexchangeDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  executionStrategyDailyData?: Resolver<Maybe<ResolversTypes['ExecutionStrategyDailyData']>, ParentType, ContextType, RequireFields<QueryexecutionStrategyDailyDataArgs, 'id' | 'subgraphError'>>;
  executionStrategyDailyDatas?: Resolver<Array<ResolversTypes['ExecutionStrategyDailyData']>, ParentType, ContextType, RequireFields<QueryexecutionStrategyDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  userDailyData?: Resolver<Maybe<ResolversTypes['UserDailyData']>, ParentType, ContextType, RequireFields<QueryuserDailyDataArgs, 'id' | 'subgraphError'>>;
  userDailyDatas?: Resolver<Array<ResolversTypes['UserDailyData']>, ParentType, ContextType, RequireFields<QueryuserDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  royaltyTransfer?: Resolver<Maybe<ResolversTypes['RoyaltyTransfer']>, ParentType, ContextType, RequireFields<QueryroyaltyTransferArgs, 'id' | 'subgraphError'>>;
  royaltyTransfers?: Resolver<Array<ResolversTypes['RoyaltyTransfer']>, ParentType, ContextType, RequireFields<QueryroyaltyTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RoyaltyTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RoyaltyTransfer'] = ResolversParentTypes['RoyaltyTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  collection?: SubscriptionResolver<Maybe<ResolversTypes['Collection']>, "collection", ParentType, ContextType, RequireFields<SubscriptioncollectionArgs, 'id' | 'subgraphError'>>;
  collections?: SubscriptionResolver<Array<ResolversTypes['Collection']>, "collections", ParentType, ContextType, RequireFields<SubscriptioncollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  executionStrategy?: SubscriptionResolver<Maybe<ResolversTypes['ExecutionStrategy']>, "executionStrategy", ParentType, ContextType, RequireFields<SubscriptionexecutionStrategyArgs, 'id' | 'subgraphError'>>;
  executionStrategies?: SubscriptionResolver<Array<ResolversTypes['ExecutionStrategy']>, "executionStrategies", ParentType, ContextType, RequireFields<SubscriptionexecutionStrategiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  collectionDailyData?: SubscriptionResolver<Maybe<ResolversTypes['CollectionDailyData']>, "collectionDailyData", ParentType, ContextType, RequireFields<SubscriptioncollectionDailyDataArgs, 'id' | 'subgraphError'>>;
  collectionDailyDatas?: SubscriptionResolver<Array<ResolversTypes['CollectionDailyData']>, "collectionDailyDatas", ParentType, ContextType, RequireFields<SubscriptioncollectionDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  exchangeDailyData?: SubscriptionResolver<Maybe<ResolversTypes['ExchangeDailyData']>, "exchangeDailyData", ParentType, ContextType, RequireFields<SubscriptionexchangeDailyDataArgs, 'id' | 'subgraphError'>>;
  exchangeDailyDatas?: SubscriptionResolver<Array<ResolversTypes['ExchangeDailyData']>, "exchangeDailyDatas", ParentType, ContextType, RequireFields<SubscriptionexchangeDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  executionStrategyDailyData?: SubscriptionResolver<Maybe<ResolversTypes['ExecutionStrategyDailyData']>, "executionStrategyDailyData", ParentType, ContextType, RequireFields<SubscriptionexecutionStrategyDailyDataArgs, 'id' | 'subgraphError'>>;
  executionStrategyDailyDatas?: SubscriptionResolver<Array<ResolversTypes['ExecutionStrategyDailyData']>, "executionStrategyDailyDatas", ParentType, ContextType, RequireFields<SubscriptionexecutionStrategyDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  userDailyData?: SubscriptionResolver<Maybe<ResolversTypes['UserDailyData']>, "userDailyData", ParentType, ContextType, RequireFields<SubscriptionuserDailyDataArgs, 'id' | 'subgraphError'>>;
  userDailyDatas?: SubscriptionResolver<Array<ResolversTypes['UserDailyData']>, "userDailyDatas", ParentType, ContextType, RequireFields<SubscriptionuserDailyDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  royaltyTransfer?: SubscriptionResolver<Maybe<ResolversTypes['RoyaltyTransfer']>, "royaltyTransfer", ParentType, ContextType, RequireFields<SubscriptionroyaltyTransferArgs, 'id' | 'subgraphError'>>;
  royaltyTransfers?: SubscriptionResolver<Array<ResolversTypes['RoyaltyTransfer']>, "royaltyTransfers", ParentType, ContextType, RequireFields<SubscriptionroyaltyTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  isTakerAsk?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['ExecutionStrategy'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  maker?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  taker?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAskVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalBidVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalMakerVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalTakerVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalRoyaltyCollected?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dayData?: Resolver<Array<ResolversTypes['UserDailyData']>, ParentType, ContextType, RequireFields<UserdayDataArgs, 'skip' | 'first'>>;
  makerTransactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<UsermakerTransactionsArgs, 'skip' | 'first'>>;
  takerTransactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<UsertakerTransactionsArgs, 'skip' | 'first'>>;
  royaltyPayments?: Resolver<Array<ResolversTypes['RoyaltyTransfer']>, ParentType, ContextType, RequireFields<UserroyaltyPaymentsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserDailyDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserDailyData'] = ResolversParentTypes['UserDailyData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  dailyTransactions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dailyVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeExcludingZeroFee?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Collection?: CollectionResolvers<ContextType>;
  CollectionDailyData?: CollectionDailyDataResolvers<ContextType>;
  ExchangeDailyData?: ExchangeDailyDataResolvers<ContextType>;
  ExecutionStrategy?: ExecutionStrategyResolvers<ContextType>;
  ExecutionStrategyDailyData?: ExecutionStrategyDailyDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RoyaltyTransfer?: RoyaltyTransferResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserDailyData?: UserDailyDataResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace ExchangeLrTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**
 * Collection
 *
 */
export type Collection = {
  /** ID (collection address) */
  id: Scalars['ID'];
  /** Total number of transactions */
  totalTransactions: Scalars['BigInt'];
  /** Total number of taker bid transactions */
  totalTakerBidTransactions: Scalars['BigInt'];
  /** Total number of taker ask transactions */
  totalTakerAskTransactions: Scalars['BigInt'];
  /** Total volume of collection (in ETH) */
  totalVolume: Scalars['BigDecimal'];
  /** Total taker bid volume (in ETH) */
  totalTakerBidVolume: Scalars['BigDecimal'];
  /** Total taker ask volume (in ETH) */
  totalTakerAskVolume: Scalars['BigDecimal'];
  /** Total royalty paid (in ETH) */
  totalRoyaltyPaid: Scalars['BigDecimal'];
  /** Daily history */
  dayData: Array<CollectionDailyData>;
  /** Royalty transfers */
  royaltyTransfers: Array<RoyaltyTransfer>;
  /** Transactions */
  transactions: Array<Transaction>;
};


/**
 * Collection
 *
 */
export type CollectiondayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectionDailyData_filter>;
};


/**
 * Collection
 *
 */
export type CollectionroyaltyTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
};


/**
 * Collection
 *
 */
export type CollectiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};

/**
 * CollectionDailyData
 *
 */
export type CollectionDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** Collection */
  collection: Collection;
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily unique taker bid transactions */
  dailyTakerBidTransactions: Scalars['BigInt'];
  /** Daily unique taker ask transactions */
  dailyTakerAskTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily taker bid volume (in ETH) */
  dailyTakerBidVolume: Scalars['BigDecimal'];
  /** Daily taker ask volume (in ETH) */
  dailyTakerAskVolume: Scalars['BigDecimal'];
  /** Daily volume (in ETH) excluding zero-fee strategy */
  dailyVolumeExcludingZeroFee: Scalars['BigDecimal'];
  /** Royalty payment (in ETH) */
  dailyRoyalty: Scalars['BigDecimal'];
};

export type CollectionDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<Collection_filter>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRoyalty?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRoyalty_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRoyalty_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type CollectionDailyData_orderBy =
  | 'id'
  | 'date'
  | 'collection'
  | 'dailyTransactions'
  | 'dailyTakerBidTransactions'
  | 'dailyTakerAskTransactions'
  | 'dailyVolume'
  | 'dailyTakerBidVolume'
  | 'dailyTakerAskVolume'
  | 'dailyVolumeExcludingZeroFee'
  | 'dailyRoyalty';

export type Collection_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyPaid?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyPaid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyPaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dayData_?: InputMaybe<CollectionDailyData_filter>;
  royaltyTransfers_?: InputMaybe<RoyaltyTransfer_filter>;
  transactions_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Collection_orderBy =
  | 'id'
  | 'totalTransactions'
  | 'totalTakerBidTransactions'
  | 'totalTakerAskTransactions'
  | 'totalVolume'
  | 'totalTakerBidVolume'
  | 'totalTakerAskVolume'
  | 'totalRoyaltyPaid'
  | 'dayData'
  | 'royaltyTransfers'
  | 'transactions';

/**
 * ExchangeDailyData
 *
 */
export type ExchangeDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** Daily unique users */
  dailyUsers: Scalars['BigInt'];
  /** Daily unique collections traded */
  dailyCollections: Scalars['BigInt'];
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily taker ask transactions */
  dailyTakerBidTransactions: Scalars['BigInt'];
  /** Daily taker ask transactions */
  dailyTakerAskTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily taker bid volume (in ETH) */
  dailyTakerBidVolume: Scalars['BigDecimal'];
  /** Daily taker ask volume (in ETH) */
  dailyTakerAskVolume: Scalars['BigDecimal'];
  /** Daily volume (in ETH) excluding zero-fee strategy */
  dailyVolumeExcludingZeroFee: Scalars['BigDecimal'];
};

export type ExchangeDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyUsers?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_not?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_gt?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_lt?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_gte?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_lte?: InputMaybe<Scalars['BigInt']>;
  dailyUsers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyUsers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyCollections?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_not?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_gt?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_lt?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_gte?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_lte?: InputMaybe<Scalars['BigInt']>;
  dailyCollections_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyCollections_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ExchangeDailyData_orderBy =
  | 'id'
  | 'date'
  | 'dailyUsers'
  | 'dailyCollections'
  | 'dailyTransactions'
  | 'dailyTakerBidTransactions'
  | 'dailyTakerAskTransactions'
  | 'dailyVolume'
  | 'dailyTakerBidVolume'
  | 'dailyTakerAskVolume'
  | 'dailyVolumeExcludingZeroFee';

/**
 * ExecutionStrategy
 *
 */
export type ExecutionStrategy = {
  /** ID (execution strategy address) */
  id: Scalars['ID'];
  /** Protocol fee (e.g., 500 --> 5%) */
  protocolFee: Scalars['BigInt'];
  /** Total number of transactions */
  totalTransactions: Scalars['BigInt'];
  /** Total number of taker bid transactions */
  totalTakerBidTransactions: Scalars['BigInt'];
  /** Total number of taker ask transactions */
  totalTakerAskTransactions: Scalars['BigInt'];
  /** Total volume (in ETH) */
  totalVolume: Scalars['BigDecimal'];
  /** Total taker bid volume (in ETH) */
  totalTakerBidVolume: Scalars['BigDecimal'];
  /** Total taker ask volume (in ETH) */
  totalTakerAskVolume: Scalars['BigDecimal'];
  /** Daily history */
  dayData: Array<ExecutionStrategyDailyData>;
  /** Transactions */
  transactions: Array<Transaction>;
};


/**
 * ExecutionStrategy
 *
 */
export type ExecutionStrategydayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategyDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategyDailyData_filter>;
};


/**
 * ExecutionStrategy
 *
 */
export type ExecutionStrategytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};

/**
 * ExecutionStrategyDailyData
 *
 */
export type ExecutionStrategyDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Execution strategy */
  strategy: ExecutionStrategy;
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily unique taker bid transactions */
  dailyTakerBidTransactions: Scalars['BigInt'];
  /** Daily unique taker bid transactions */
  dailyTakerAskTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily taker bid volume (in ETH) */
  dailyTakerBidVolume: Scalars['BigDecimal'];
  /** Daily taker ask volume (in ETH) */
  dailyTakerAskVolume: Scalars['BigDecimal'];
};

export type ExecutionStrategyDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<ExecutionStrategy_filter>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ExecutionStrategyDailyData_orderBy =
  | 'id'
  | 'strategy'
  | 'date'
  | 'dailyTransactions'
  | 'dailyTakerBidTransactions'
  | 'dailyTakerAskTransactions'
  | 'dailyVolume'
  | 'dailyTakerBidVolume'
  | 'dailyTakerAskVolume';

export type ExecutionStrategy_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocolFee?: InputMaybe<Scalars['BigInt']>;
  protocolFee_not?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerBidTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerBidTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTakerAskTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTakerAskTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dayData_?: InputMaybe<ExecutionStrategyDailyData_filter>;
  transactions_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ExecutionStrategy_orderBy =
  | 'id'
  | 'protocolFee'
  | 'totalTransactions'
  | 'totalTakerBidTransactions'
  | 'totalTakerAskTransactions'
  | 'totalVolume'
  | 'totalTakerBidVolume'
  | 'totalTakerAskVolume'
  | 'dayData'
  | 'transactions';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  executionStrategy?: Maybe<ExecutionStrategy>;
  executionStrategies: Array<ExecutionStrategy>;
  user?: Maybe<User>;
  users: Array<User>;
  collectionDailyData?: Maybe<CollectionDailyData>;
  collectionDailyDatas: Array<CollectionDailyData>;
  exchangeDailyData?: Maybe<ExchangeDailyData>;
  exchangeDailyDatas: Array<ExchangeDailyData>;
  executionStrategyDailyData?: Maybe<ExecutionStrategyDailyData>;
  executionStrategyDailyDatas: Array<ExecutionStrategyDailyData>;
  userDailyData?: Maybe<UserDailyData>;
  userDailyDatas: Array<UserDailyData>;
  royaltyTransfer?: Maybe<RoyaltyTransfer>;
  royaltyTransfers: Array<RoyaltyTransfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectionDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexchangeDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexchangeDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExchangeDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExchangeDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategyDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexecutionStrategyDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategyDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategyDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroyaltyTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryroyaltyTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

/**
 * RoyaltyTransfer
 *
 */
export type RoyaltyTransfer = {
  /** ID */
  id: Scalars['ID'];
  /** Date (timestamp) */
  date: Scalars['BigInt'];
  /** Block number */
  block: Scalars['BigInt'];
  /** Collection */
  collection: Collection;
  /** TokenId */
  tokenId: Scalars['BigInt'];
  /** User */
  user: User;
  /** Amount received (in ETH) */
  amount: Scalars['BigDecimal'];
};

export type RoyaltyTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<Collection_filter>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RoyaltyTransfer_orderBy =
  | 'id'
  | 'date'
  | 'block'
  | 'collection'
  | 'tokenId'
  | 'user'
  | 'amount';

export type Subscription = {
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  executionStrategy?: Maybe<ExecutionStrategy>;
  executionStrategies: Array<ExecutionStrategy>;
  user?: Maybe<User>;
  users: Array<User>;
  collectionDailyData?: Maybe<CollectionDailyData>;
  collectionDailyDatas: Array<CollectionDailyData>;
  exchangeDailyData?: Maybe<ExchangeDailyData>;
  exchangeDailyDatas: Array<ExchangeDailyData>;
  executionStrategyDailyData?: Maybe<ExecutionStrategyDailyData>;
  executionStrategyDailyDatas: Array<ExecutionStrategyDailyData>;
  userDailyData?: Maybe<UserDailyData>;
  userDailyDatas: Array<UserDailyData>;
  royaltyTransfer?: Maybe<RoyaltyTransfer>;
  royaltyTransfers: Array<RoyaltyTransfer>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncollectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectionDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexchangeDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexchangeDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExchangeDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExchangeDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategyDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexecutionStrategyDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExecutionStrategyDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExecutionStrategyDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserDailyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserDailyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDailyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroyaltyTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionroyaltyTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

/**
 * Transaction
 *
 */
export type Transaction = {
  /** ID */
  id: Scalars['ID'];
  /** Date (timestamp) */
  date: Scalars['BigInt'];
  /** Block number */
  block: Scalars['BigInt'];
  /** Collection */
  collection: Collection;
  /** Whether the transaction is a takerAsk */
  isTakerAsk: Scalars['Boolean'];
  /** Execution strategy */
  strategy: ExecutionStrategy;
  /** TokenId */
  tokenId: Scalars['BigInt'];
  /** Price (in ETH) */
  price: Scalars['BigDecimal'];
  /** Maker user */
  maker: User;
  /** Taker user */
  taker: User;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_?: InputMaybe<Collection_filter>;
  isTakerAsk?: InputMaybe<Scalars['Boolean']>;
  isTakerAsk_not?: InputMaybe<Scalars['Boolean']>;
  isTakerAsk_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isTakerAsk_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<ExecutionStrategy_filter>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maker?: InputMaybe<Scalars['String']>;
  maker_not?: InputMaybe<Scalars['String']>;
  maker_gt?: InputMaybe<Scalars['String']>;
  maker_lt?: InputMaybe<Scalars['String']>;
  maker_gte?: InputMaybe<Scalars['String']>;
  maker_lte?: InputMaybe<Scalars['String']>;
  maker_in?: InputMaybe<Array<Scalars['String']>>;
  maker_not_in?: InputMaybe<Array<Scalars['String']>>;
  maker_contains?: InputMaybe<Scalars['String']>;
  maker_contains_nocase?: InputMaybe<Scalars['String']>;
  maker_not_contains?: InputMaybe<Scalars['String']>;
  maker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  maker_starts_with?: InputMaybe<Scalars['String']>;
  maker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  maker_not_starts_with?: InputMaybe<Scalars['String']>;
  maker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  maker_ends_with?: InputMaybe<Scalars['String']>;
  maker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  maker_not_ends_with?: InputMaybe<Scalars['String']>;
  maker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  maker_?: InputMaybe<User_filter>;
  taker?: InputMaybe<Scalars['String']>;
  taker_not?: InputMaybe<Scalars['String']>;
  taker_gt?: InputMaybe<Scalars['String']>;
  taker_lt?: InputMaybe<Scalars['String']>;
  taker_gte?: InputMaybe<Scalars['String']>;
  taker_lte?: InputMaybe<Scalars['String']>;
  taker_in?: InputMaybe<Array<Scalars['String']>>;
  taker_not_in?: InputMaybe<Array<Scalars['String']>>;
  taker_contains?: InputMaybe<Scalars['String']>;
  taker_contains_nocase?: InputMaybe<Scalars['String']>;
  taker_not_contains?: InputMaybe<Scalars['String']>;
  taker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  taker_starts_with?: InputMaybe<Scalars['String']>;
  taker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  taker_not_starts_with?: InputMaybe<Scalars['String']>;
  taker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  taker_ends_with?: InputMaybe<Scalars['String']>;
  taker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  taker_not_ends_with?: InputMaybe<Scalars['String']>;
  taker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  taker_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'date'
  | 'block'
  | 'collection'
  | 'isTakerAsk'
  | 'strategy'
  | 'tokenId'
  | 'price'
  | 'maker'
  | 'taker';

/**
 * User
 *
 */
export type User = {
  /** ID (user address) */
  id: Scalars['ID'];
  /** Total number of transactions */
  totalTransactions: Scalars['BigInt'];
  /** Total ask volume (in ETH) */
  totalAskVolume: Scalars['BigDecimal'];
  /** Total bid volume (in ETH) */
  totalBidVolume: Scalars['BigDecimal'];
  /** Total maker volume (in ETH) */
  totalMakerVolume: Scalars['BigDecimal'];
  /** Total taker volume (in ETH) */
  totalTakerVolume: Scalars['BigDecimal'];
  /** Total volume (in ETH) */
  totalVolume: Scalars['BigDecimal'];
  /** Total royalty collected (in ETH) */
  totalRoyaltyCollected: Scalars['BigDecimal'];
  /** Daily history */
  dayData: Array<UserDailyData>;
  /** Transactions where user is the maker side */
  makerTransactions: Array<Transaction>;
  /** Transactions where user is the taker side */
  takerTransactions: Array<Transaction>;
  /** Royalty payments collected by the user (as recipient) */
  royaltyPayments: Array<RoyaltyTransfer>;
};


/**
 * User
 *
 */
export type UserdayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserDailyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserDailyData_filter>;
};


/**
 * User
 *
 */
export type UsermakerTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};


/**
 * User
 *
 */
export type UsertakerTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};


/**
 * User
 *
 */
export type UserroyaltyPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoyaltyTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoyaltyTransfer_filter>;
};

/**
 * UserDailyData
 *
 */
export type UserDailyData = {
  /** ID */
  id: Scalars['ID'];
  /** Start date (timestamp) */
  date: Scalars['BigInt'];
  /** User */
  user: User;
  /** Daily unique transactions */
  dailyTransactions: Scalars['BigInt'];
  /** Daily volume (in ETH) */
  dailyVolume: Scalars['BigDecimal'];
  /** Daily volume (in ETH) excluding zero-fee strategy */
  dailyVolumeExcludingZeroFee: Scalars['BigDecimal'];
};

export type UserDailyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  dailyTransactions?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_not?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolume?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeExcludingZeroFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeExcludingZeroFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UserDailyData_orderBy =
  | 'id'
  | 'date'
  | 'user'
  | 'dailyTransactions'
  | 'dailyVolume'
  | 'dailyVolumeExcludingZeroFee';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAskVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalAskVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalAskVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBidVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBidVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBidVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalMakerVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalMakerVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalMakerVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalTakerVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalTakerVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyCollected?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_not?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalRoyaltyCollected_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalRoyaltyCollected_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dayData_?: InputMaybe<UserDailyData_filter>;
  makerTransactions_?: InputMaybe<Transaction_filter>;
  takerTransactions_?: InputMaybe<Transaction_filter>;
  royaltyPayments_?: InputMaybe<RoyaltyTransfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type User_orderBy =
  | 'id'
  | 'totalTransactions'
  | 'totalAskVolume'
  | 'totalBidVolume'
  | 'totalMakerVolume'
  | 'totalTakerVolume'
  | 'totalVolume'
  | 'totalRoyaltyCollected'
  | 'dayData'
  | 'makerTransactions'
  | 'takerTransactions'
  | 'royaltyPayments';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars['String']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryExchangeLrSdk = {
  /** undefined **/
  collection: InContextSdkMethod<ExchangeLrTypes.Query['collection'], ExchangeLrTypes.QuerycollectionArgs, MeshContext>,
  /** undefined **/
  collections: InContextSdkMethod<ExchangeLrTypes.Query['collections'], ExchangeLrTypes.QuerycollectionsArgs, MeshContext>,
  /** undefined **/
  executionStrategy: InContextSdkMethod<ExchangeLrTypes.Query['executionStrategy'], ExchangeLrTypes.QueryexecutionStrategyArgs, MeshContext>,
  /** undefined **/
  executionStrategies: InContextSdkMethod<ExchangeLrTypes.Query['executionStrategies'], ExchangeLrTypes.QueryexecutionStrategiesArgs, MeshContext>,
  /** undefined **/
  user: InContextSdkMethod<ExchangeLrTypes.Query['user'], ExchangeLrTypes.QueryuserArgs, MeshContext>,
  /** undefined **/
  users: InContextSdkMethod<ExchangeLrTypes.Query['users'], ExchangeLrTypes.QueryusersArgs, MeshContext>,
  /** undefined **/
  collectionDailyData: InContextSdkMethod<ExchangeLrTypes.Query['collectionDailyData'], ExchangeLrTypes.QuerycollectionDailyDataArgs, MeshContext>,
  /** undefined **/
  collectionDailyDatas: InContextSdkMethod<ExchangeLrTypes.Query['collectionDailyDatas'], ExchangeLrTypes.QuerycollectionDailyDatasArgs, MeshContext>,
  /** undefined **/
  exchangeDailyData: InContextSdkMethod<ExchangeLrTypes.Query['exchangeDailyData'], ExchangeLrTypes.QueryexchangeDailyDataArgs, MeshContext>,
  /** undefined **/
  exchangeDailyDatas: InContextSdkMethod<ExchangeLrTypes.Query['exchangeDailyDatas'], ExchangeLrTypes.QueryexchangeDailyDatasArgs, MeshContext>,
  /** undefined **/
  executionStrategyDailyData: InContextSdkMethod<ExchangeLrTypes.Query['executionStrategyDailyData'], ExchangeLrTypes.QueryexecutionStrategyDailyDataArgs, MeshContext>,
  /** undefined **/
  executionStrategyDailyDatas: InContextSdkMethod<ExchangeLrTypes.Query['executionStrategyDailyDatas'], ExchangeLrTypes.QueryexecutionStrategyDailyDatasArgs, MeshContext>,
  /** undefined **/
  userDailyData: InContextSdkMethod<ExchangeLrTypes.Query['userDailyData'], ExchangeLrTypes.QueryuserDailyDataArgs, MeshContext>,
  /** undefined **/
  userDailyDatas: InContextSdkMethod<ExchangeLrTypes.Query['userDailyDatas'], ExchangeLrTypes.QueryuserDailyDatasArgs, MeshContext>,
  /** undefined **/
  royaltyTransfer: InContextSdkMethod<ExchangeLrTypes.Query['royaltyTransfer'], ExchangeLrTypes.QueryroyaltyTransferArgs, MeshContext>,
  /** undefined **/
  royaltyTransfers: InContextSdkMethod<ExchangeLrTypes.Query['royaltyTransfers'], ExchangeLrTypes.QueryroyaltyTransfersArgs, MeshContext>,
  /** undefined **/
  transaction: InContextSdkMethod<ExchangeLrTypes.Query['transaction'], ExchangeLrTypes.QuerytransactionArgs, MeshContext>,
  /** undefined **/
  transactions: InContextSdkMethod<ExchangeLrTypes.Query['transactions'], ExchangeLrTypes.QuerytransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<ExchangeLrTypes.Query['_meta'], ExchangeLrTypes.Query_metaArgs, MeshContext>
};

export type MutationExchangeLrSdk = {

};

export type SubscriptionExchangeLrSdk = {
  /** undefined **/
  collection: InContextSdkMethod<ExchangeLrTypes.Subscription['collection'], ExchangeLrTypes.SubscriptioncollectionArgs, MeshContext>,
  /** undefined **/
  collections: InContextSdkMethod<ExchangeLrTypes.Subscription['collections'], ExchangeLrTypes.SubscriptioncollectionsArgs, MeshContext>,
  /** undefined **/
  executionStrategy: InContextSdkMethod<ExchangeLrTypes.Subscription['executionStrategy'], ExchangeLrTypes.SubscriptionexecutionStrategyArgs, MeshContext>,
  /** undefined **/
  executionStrategies: InContextSdkMethod<ExchangeLrTypes.Subscription['executionStrategies'], ExchangeLrTypes.SubscriptionexecutionStrategiesArgs, MeshContext>,
  /** undefined **/
  user: InContextSdkMethod<ExchangeLrTypes.Subscription['user'], ExchangeLrTypes.SubscriptionuserArgs, MeshContext>,
  /** undefined **/
  users: InContextSdkMethod<ExchangeLrTypes.Subscription['users'], ExchangeLrTypes.SubscriptionusersArgs, MeshContext>,
  /** undefined **/
  collectionDailyData: InContextSdkMethod<ExchangeLrTypes.Subscription['collectionDailyData'], ExchangeLrTypes.SubscriptioncollectionDailyDataArgs, MeshContext>,
  /** undefined **/
  collectionDailyDatas: InContextSdkMethod<ExchangeLrTypes.Subscription['collectionDailyDatas'], ExchangeLrTypes.SubscriptioncollectionDailyDatasArgs, MeshContext>,
  /** undefined **/
  exchangeDailyData: InContextSdkMethod<ExchangeLrTypes.Subscription['exchangeDailyData'], ExchangeLrTypes.SubscriptionexchangeDailyDataArgs, MeshContext>,
  /** undefined **/
  exchangeDailyDatas: InContextSdkMethod<ExchangeLrTypes.Subscription['exchangeDailyDatas'], ExchangeLrTypes.SubscriptionexchangeDailyDatasArgs, MeshContext>,
  /** undefined **/
  executionStrategyDailyData: InContextSdkMethod<ExchangeLrTypes.Subscription['executionStrategyDailyData'], ExchangeLrTypes.SubscriptionexecutionStrategyDailyDataArgs, MeshContext>,
  /** undefined **/
  executionStrategyDailyDatas: InContextSdkMethod<ExchangeLrTypes.Subscription['executionStrategyDailyDatas'], ExchangeLrTypes.SubscriptionexecutionStrategyDailyDatasArgs, MeshContext>,
  /** undefined **/
  userDailyData: InContextSdkMethod<ExchangeLrTypes.Subscription['userDailyData'], ExchangeLrTypes.SubscriptionuserDailyDataArgs, MeshContext>,
  /** undefined **/
  userDailyDatas: InContextSdkMethod<ExchangeLrTypes.Subscription['userDailyDatas'], ExchangeLrTypes.SubscriptionuserDailyDatasArgs, MeshContext>,
  /** undefined **/
  royaltyTransfer: InContextSdkMethod<ExchangeLrTypes.Subscription['royaltyTransfer'], ExchangeLrTypes.SubscriptionroyaltyTransferArgs, MeshContext>,
  /** undefined **/
  royaltyTransfers: InContextSdkMethod<ExchangeLrTypes.Subscription['royaltyTransfers'], ExchangeLrTypes.SubscriptionroyaltyTransfersArgs, MeshContext>,
  /** undefined **/
  transaction: InContextSdkMethod<ExchangeLrTypes.Subscription['transaction'], ExchangeLrTypes.SubscriptiontransactionArgs, MeshContext>,
  /** undefined **/
  transactions: InContextSdkMethod<ExchangeLrTypes.Subscription['transactions'], ExchangeLrTypes.SubscriptiontransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<ExchangeLrTypes.Subscription['_meta'], ExchangeLrTypes.Subscription_metaArgs, MeshContext>
};

export type ExchangeLrContext = {
      ["exchangeLR"]: { Query: QueryExchangeLrSdk, Mutation: MutationExchangeLrSdk, Subscription: SubscriptionExchangeLrSdk },
      
    };

export type MeshContext = ExchangeLrContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/exchangeLR/introspectionSchema":
      return import("./sources/exchangeLR/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetchFactory } from 'fetchache';
import { fetch, Request, Response } from '@whatwg-node/fetch';

import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)
const fetchFn = fetchFactory({ cache, fetch, Request, Response });
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const exchangeLrTransforms = [];
const additionalTypeDefs = [] as any[];
const exchangeLrHandler = new GraphqlHandler({
              name: "exchangeLR",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/looksrare/exchange"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("exchangeLR"),
              logger: logger.child("exchangeLR"),
              importFn,
              fetchFn,
            });
sources[0] = {
          name: 'exchangeLR',
          handler: exchangeLrHandler,
          transforms: exchangeLrTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: ExampleExchangeQueryDocument,
        get rawSDL() {
          return printWithCache(ExampleExchangeQueryDocument);
        },
        location: 'ExampleExchangeQueryDocument.graphql'
      }
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type ExampleExchangeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleExchangeQueryQuery = { collections: Array<Pick<Collection, 'id' | 'totalVolume' | 'totalTransactions' | 'totalTakerBidTransactions' | 'totalTakerAskTransactions' | 'totalTakerBidVolume'>>, executionStrategies: Array<Pick<ExecutionStrategy, 'id' | 'protocolFee' | 'totalTransactions' | 'totalTakerBidTransactions'>> };


export const ExampleExchangeQueryDocument = gql`
    query ExampleExchangeQuery {
  collections(first: 5) {
    id
    totalVolume
    totalTransactions
    totalTakerBidTransactions
    totalTakerAskTransactions
    totalTakerBidVolume
  }
  executionStrategies(first: 5) {
    id
    protocolFee
    totalTransactions
    totalTakerBidTransactions
  }
}
    ` as unknown as DocumentNode<ExampleExchangeQueryQuery, ExampleExchangeQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    ExampleExchangeQuery(variables?: ExampleExchangeQueryQueryVariables, options?: C): Promise<ExampleExchangeQueryQuery> {
      return requester<ExampleExchangeQueryQuery, ExampleExchangeQueryQueryVariables>(ExampleExchangeQueryDocument, variables, options) as Promise<ExampleExchangeQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;