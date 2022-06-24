import React, {useEffect, useRef} from 'react';
import Head from 'next/head';
import isbot from 'isbot'

function Intro(userAgent) {
// const results = getServerSideProps;
// console.log(results);
var isBot = isbot(userAgent);
console.log(userAgent)
console.log(isBot)
// const user = /bot|spider|crawl/i.test(window.navigator.userAgent);

// console.log(user);
  return (
   <>
    <Head>
        <title>The Rock (1996)</title>
        {isBot?
        <>
        <meta property="og:title" content="The Rock" />
          <meta property="og:description" content="안녕 여기는 메타태그 연습장이야" />
          <meta property="og:type" content="video.movie" />
          <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
          <meta property="og:image" content="https://mnews.jtbc.joins.com/News/Article.aspx?news_id=NB11689967" />
        </>:
        <></> 
      }
    </Head>
   
        <div>
            안녕
        </div>
   </>
  
  );
}

export async function getServerSideProps({req} ) {
  const userAgent = req.headers['user-agent']
  // Fetch data from external API
  

  // Pass data to the page via props
  return { 
      props:{
        userAgent: userAgent
   }
}
}


export default Intro;