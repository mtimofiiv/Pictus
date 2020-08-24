import React from "react"
import Helmet from "react-helmet"
import favicon from '../images/path.png'
import share from '../images/share.png'

const SEO = ({ description, lang, meta, title, canonical, keywords }) => {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`PICTUS | %s`}
      meta={[].concat(meta)}
      defer={false}
      >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="Joe Czepil"/>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}/>

      <link rel="canonical" href={`https://www.pictus.ca/${canonical}`} />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />

      <meta property="og:title" content="PICTUS - Making it easier than ever for your recycling stewardship" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.pictus.ca/" />
      <meta property="og:image" content={share} />
      <meta property="og:description" content="PICTUS empowers recycling stewardships and PROs to manage, monitor, and improve their recycling and incentive programs. Configure your application today and see the results tomorrow." />

      <meta name="twitter:title" content="PICTUS - Making it easier than ever for your recycling stewardship"/>
      <meta name="twitter:description" content="PICTUS empowers recycling stewardships and PROs to manage, monitor, and improve their recycling and incentive programs. Configure your application today and see the results tomorrow."/>
      <meta name="twitter:image" content={share} />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://www.pictus.ca"></meta>

      <meta property="og:site_name" content="Pictus"/>
      <meta name="twitter:image:alt" content="Pictus Website Image"/>
    </Helmet>
  )
}

export default SEO;


