"use client";

import Head from "next/head";
import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";
import { ComponentType } from "react";

type MDXProps = {
  components: Record<string, ComponentType<any>>;
};

type PageData = {
  title: string;
  description: string;
  body: ComponentType<MDXProps>;
  toc?: any;
  full?: boolean;
};

export default function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug || [];

  const page = source.getPage(slug) as { data: PageData } | null;

  if (!page?.data) return notFound();

  const { title, description, body, toc, full } = page.data;
  const MDX = body;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <DocsPage toc={toc} full={full}>
        <DocsTitle>{title}</DocsTitle>
        <DocsDescription>{description}</DocsDescription>
        <DocsBody>
          <MDX
            components={
              defaultMdxComponents as Record<string, ComponentType<any>>
            }
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}
