import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";

type PageData = {
  title: string;
  description: string;
  body: any;
  toc?: any;
  full?: boolean;
};

export default async function Page(props: { params: { slug?: string[] } }) {
  const params = await props.params;
  const page = source.getPage(params.slug) as { data: PageData } | null;

  if (!page?.data) notFound();

  const { title, description, body, toc, full } = page.data;
  const MDX = body;

  return (
    <DocsPage toc={toc} full={full}>
      <DocsTitle>{title}</DocsTitle>
      <DocsDescription>{description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: { slug?: string[] } }) {
  const params = await props.params;
  const page = source.getPage(params.slug) as { data: PageData } | null;

  if (!page?.data) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
