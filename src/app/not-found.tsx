import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page pt-16 md:pt-28 pb-8">
      <div className="rail-grid">
        <p className="font-mono text-meta text-muted">404</p>
        <div className="col-main">
          <h1 className="text-intro text-text">This page isn&apos;t here.</h1>
          <p className="mt-4 text-lead text-text-2">
            Try the{" "}
            <Link href="/" className="prose-link">
              homepage
            </Link>{" "}
            or{" "}
            <Link href="/#work" className="prose-link">
              selected work
            </Link>
            .
          </p>
          <p className="mt-6 text-lead text-muted">
            <span lang="bo">ཤོག་ངོས་འདི་མི་འདུག</span>
          </p>
        </div>
      </div>
    </div>
  );
}
