import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mt-7 mb-2 text-gray-500">
    <ol className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <li key={item.label} className="flex items-center gap-2">
            {isLast && !item.to ? (
              <span
                aria-current={isLast ? "page" : undefined}
                className={isLast ? "font-semibold text-secondary" : ""}
              >
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="hover:text-primary">
                {item.label}
              </Link>
            )}

            {!isLast && <span aria-hidden="true">/</span>}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
