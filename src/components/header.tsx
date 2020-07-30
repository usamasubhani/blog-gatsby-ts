import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }: Props) => (
  <header
    style={{
      // background: `black`,
      color: `white`,
      marginBottom: `1.45rem`,
      display: "flex",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            // color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          
        </Link>
      </h1>
      <p style={{fontSize: `x-small`, color: `blueviolet`}}> by Usama Subhani</p>
      
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 5 }}>
        <Link
          to="https://twitter.com/basedusama"
          style={{
            // color: `white`,
            textDecoration: `none`,
          }}
        >
          twitter
        </Link>
        <span  > | </span>
        <Link
          to="https://github.com/usamasubhani"
          style={{
            // color: `white`,
            textDecoration: `none`,
          }}
        >
          github
        </Link>
        <span  > | </span>
        <Link
          to="https://www.linkedin.com/in/usamasubhani/"
          style={{
            // color: `white`,
            textDecoration: `none`,
          }}
        >
          linkedin
        </Link>
      </h3>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
