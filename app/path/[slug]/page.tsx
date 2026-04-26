import { notFound, permanentRedirect } from "next/navigation";
import { audiencePaths, getAudiencePath } from "../../lib/funnel";

type PathPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return audiencePaths.map((path) => ({ slug: path.slug }));
}

export default async function PathPage({ params }: PathPageProps) {
  const { slug } = await params;
  const path = getAudiencePath(slug);

  if (!path) {
    notFound();
  }

  permanentRedirect(path.routePath);
}
