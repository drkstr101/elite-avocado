export type Maybe<T> = T | null;
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
};

export type StackbitPageMeta = {
  __typename?: 'StackbitPageMeta';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Action = {
  __typename?: 'Action';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Fields = {
  __typename?: 'Fields';
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FormField = {
  __typename?: 'FormField';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type GridItem = {
  __typename?: 'GridItem';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Feature = {
  __typename?: 'Feature';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type FormSection = {
  __typename?: 'FormSection';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type CtaSection = {
  __typename?: 'CtaSection';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type BlogFeedSection = {
  __typename?: 'BlogFeedSection';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type GridSection = {
  __typename?: 'GridSection';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type FeaturesSection = {
  __typename?: 'FeaturesSection';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type HeroSection = {
  __typename?: 'HeroSection';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Advanced = {
  __typename?: 'Advanced';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  hideContent?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Post = {
  __typename?: 'Post';
  type?: Maybe<Scalars['String']>;
  urlPath?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  folder?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Page = {
  __typename?: 'Page';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  exclude?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Tag = {
  __typename?: 'Tag';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  folder?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Category = {
  __typename?: 'Category';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  folder?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Person = {
  __typename?: 'Person';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  folder?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Footer = {
  __typename?: 'Footer';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Header = {
  __typename?: 'Header';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelField?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type Config = {
  __typename?: 'Config';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Fields>>>;
};

export type ContentModel = {
  __typename?: 'ContentModel';
  stackbit_page_meta?: Maybe<StackbitPageMeta>;
  action?: Maybe<Action>;
  form_field?: Maybe<FormField>;
  grid_item?: Maybe<GridItem>;
  feature?: Maybe<Feature>;
  form_section?: Maybe<FormSection>;
  cta_section?: Maybe<CtaSection>;
  blog_feed_section?: Maybe<BlogFeedSection>;
  grid_section?: Maybe<GridSection>;
  features_section?: Maybe<FeaturesSection>;
  hero_section?: Maybe<HeroSection>;
  advanced?: Maybe<Advanced>;
  post?: Maybe<Post>;
  page?: Maybe<Page>;
  tag?: Maybe<Tag>;
  category?: Maybe<Category>;
  person?: Maybe<Person>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  config?: Maybe<Config>;
};

export type StackbitSite = {
  __typename?: 'AutogeneratedMainType';
  stackbitVersion?: Maybe<Scalars['String']>;
  ssgName?: Maybe<Scalars['String']>;
  ssgVersion?: Maybe<Scalars['String']>;
  buildCommand?: Maybe<Scalars['String']>;
  publishDir?: Maybe<Scalars['String']>;
  staticDir?: Maybe<Scalars['String']>;
  uploadDir?: Maybe<Scalars['String']>;
  dataDir?: Maybe<Scalars['String']>;
  pagesDir?: Maybe<Scalars['String']>;
  pageLayoutKey?: Maybe<Scalars['String']>;
  models?: Maybe<ContentModel>;
  logicFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};
