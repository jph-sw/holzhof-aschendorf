export type SupportedLang = "de" | "en" | "fr";

export const defaultLang: SupportedLang = "de";

type NestedRecord = { [key: string]: string | NestedRecord };

export async function useTranslate(
  section: string,
  lang: string = defaultLang,
) {
  const res = await fetch(
    `http://localhost:3001/content/holzhof-aschendorf/?lang=${lang}`,
  );
  const data: Record<string, NestedRecord> = await res.json();
  const sectionData: NestedRecord = data[section] ?? {};

  function t(key: string): string {
    const parts = key.split(".");
    let current: string | NestedRecord = sectionData;
    for (const part of parts) {
      if (typeof current !== "object") return key;
      current = current[part] ?? key;
    }
    return typeof current === "string" ? current : key;
  }

  return { t };
}
