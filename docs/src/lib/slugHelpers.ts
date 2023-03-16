import invariant from "tiny-invariant";

export const inject = async <T>(
  slug: string,
  collection: { read: (slug: string) => Promise<T> }
): Promise<(T & { slug: string }) | null> => {
  const data = await collection.read(slug);
  invariant(data, "Slug did not include data");
  return { ...data, slug };
};
