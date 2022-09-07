import Link from "next/link";

const HomeLink = () => {
  return (
    <div className="relative">
      <Link href="/">
        <a className="group inline-flex items-center no-underline absolute bottom-5">
          <span className="group-hover:-translate-x-0.5 mr-2 inline-block transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="underline decoration-burnt">let&apos;s go home</span>
        </a>
      </Link>
    </div>
  );
};

export default HomeLink;
