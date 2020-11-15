import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./index.scss";

export interface IndexPageProps extends RouteComponentProps {}

const pages = [
  {
    title: "quadratic function",
    key: "quadratic",
  },
];

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li onClick={() => props.history.push(page.key)}>
            <button>{page.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(IndexPage);
