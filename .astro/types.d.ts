declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"skills": {
"accessibility.md": {
	id: "accessibility.md";
  slug: "accessibility";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"astro.md": {
	id: "astro.md";
  slug: "astro";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"azure.md": {
	id: "azure.md";
  slug: "azure";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"css.md": {
	id: "css.md";
  slug: "css";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"directus.md": {
	id: "directus.md";
  slug: "directus";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"git.md": {
	id: "git.md";
  slug: "git";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"html.md": {
	id: "html.md";
  slug: "html";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"js.md": {
	id: "js.md";
  slug: "js";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"netlify.md": {
	id: "netlify.md";
  slug: "netlify";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"nuxt.md": {
	id: "nuxt.md";
  slug: "nuxt";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"pinia-vuex.md": {
	id: "pinia-vuex.md";
  slug: "pinia-vuex";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"react.md": {
	id: "react.md";
  slug: "react";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"tanstack-query.md": {
	id: "tanstack-query.md";
  slug: "tanstack-query";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"ts.md": {
	id: "ts.md";
  slug: "ts";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"vite.md": {
	id: "vite.md";
  slug: "vite";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"vitest.md": {
	id: "vitest.md";
  slug: "vitest";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"vue.md": {
	id: "vue.md";
  slug: "vue";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"web-performance.md": {
	id: "web-performance.md";
  slug: "web-performance";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
"webpack.md": {
	id: "webpack.md";
  slug: "webpack";
  body: string;
  collection: "skills";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"portfolio": Record<string, {
  id: string;
  collection: "portfolio";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
