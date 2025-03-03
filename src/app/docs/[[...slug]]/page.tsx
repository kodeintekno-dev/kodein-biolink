import { source } from "@/lib/source";
import { JSX } from "react";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { TableOfContents } from "fumadocs-core/server";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page:
    | {
        data: {
          body: React.ReactNode;
          toc: unknown;
          full: unknown;
          title: string;
          description: string;
        };
      }
    | null
    | undefined = source.getPage(params.slug);
  if (!page) notFound();
  const MDX = page.data.body as unknown as (props: {
    components: typeof defaultMdxComponents;
  }) => JSX.Element;

  return (
    <DocsPage
      toc={page.data.toc as TableOfContents | undefined}
      full={page.data.full as boolean | undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page:
    | {
        data: {
          body: React.ReactNode;
          toc: unknown;
          full: unknown;
          title: string;
          description: string;
        };
      }
    | null
    | undefined = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
