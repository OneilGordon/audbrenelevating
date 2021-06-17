import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../assets/scss/main.scss'
import Header from './Header'
import Footer from './Footer'
import aelogo from '../assets/images/aelogo.jpg'

const Layout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks {
              name
              link
              cl
              items {
                link
                name
              }             
            }
          }
        }
      }
    `}

  //original query with additional items for sub-sub menu
  //   query={graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //         menuLinks {
  //           name
  //           link
  //           cl
  //           items {
  //             link
  //             name
  //             items {
  //               link
  //               name
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `}

    render={data => (
      <React.Fragment>
        <div className={props.location == '/' ? 'landing' : ''}>
          <div id="page-wrapper">
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              //siteTitle={data.site.siteMetadata.title}
              siteTitle={<img src={aelogo}/>}
            />
            {children}
            <Footer />
          </div>
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
