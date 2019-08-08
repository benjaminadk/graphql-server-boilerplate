// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "twitterId_ASC"
  | "twitterId_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "image_ASC"
  | "image_DESC"
  | "confirmed_ASC"
  | "confirmed_DESC"
  | "forgotPasswordLock_ASC"
  | "forgotPasswordLock_DESC"
  | "role_ASC"
  | "role_DESC";

export type Role = "ADMIN" | "USER";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  twitterId?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  image: String;
  confirmed?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  role?: Maybe<Role>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  twitterId?: Maybe<ID_Input>;
  twitterId_not?: Maybe<ID_Input>;
  twitterId_in?: Maybe<ID_Input[] | ID_Input>;
  twitterId_not_in?: Maybe<ID_Input[] | ID_Input>;
  twitterId_lt?: Maybe<ID_Input>;
  twitterId_lte?: Maybe<ID_Input>;
  twitterId_gt?: Maybe<ID_Input>;
  twitterId_gte?: Maybe<ID_Input>;
  twitterId_contains?: Maybe<ID_Input>;
  twitterId_not_contains?: Maybe<ID_Input>;
  twitterId_starts_with?: Maybe<ID_Input>;
  twitterId_not_starts_with?: Maybe<ID_Input>;
  twitterId_ends_with?: Maybe<ID_Input>;
  twitterId_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  confirmed?: Maybe<Boolean>;
  confirmed_not?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  forgotPasswordLock_not?: Maybe<Boolean>;
  role?: Maybe<Role>;
  role_not?: Maybe<Role>;
  role_in?: Maybe<Role[] | Role>;
  role_not_in?: Maybe<Role[] | Role>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpdateInput {
  twitterId?: Maybe<ID_Input>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  image?: Maybe<String>;
  confirmed?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  role?: Maybe<Role>;
}

export interface UserUpdateManyMutationInput {
  twitterId?: Maybe<ID_Input>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  image?: Maybe<String>;
  confirmed?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  role?: Maybe<Role>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  twitterId?: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  twitterId?: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  email: String;
  password: String;
  image: String;
  confirmed: Boolean;
  forgotPasswordLock: Boolean;
  role: Role;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  twitterId: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  image: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  forgotPasswordLock: () => Promise<Boolean>;
  role: () => Promise<Role>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  twitterId: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  forgotPasswordLock: () => Promise<AsyncIterator<Boolean>>;
  role: () => Promise<AsyncIterator<Role>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  twitterId?: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  email: String;
  password: String;
  image: String;
  confirmed: Boolean;
  forgotPasswordLock: Boolean;
  role: Role;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  twitterId: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  image: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  forgotPasswordLock: () => Promise<Boolean>;
  role: () => Promise<Role>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  twitterId: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  forgotPasswordLock: () => Promise<AsyncIterator<Boolean>>;
  role: () => Promise<AsyncIterator<Role>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  twitterId: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  image: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  forgotPasswordLock: () => Promise<Boolean>;
  role: () => Promise<Role>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
