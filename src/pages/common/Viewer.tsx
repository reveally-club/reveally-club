import DOMPurify from "dompurify";

interface ViewerProps {
  content: string;
}

const Viewer = ({ content }: ViewerProps) => (
  <article className={`prose break-all max-w-none text-base leading-7`}>
    {typeof window !== "undefined" && (
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      ></div>
    )}
  </article>
);

export default Viewer;
