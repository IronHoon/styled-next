import React, {useEffect} from 'react';
import Head from 'next/head'
import {NextPage, NextPageContext} from 'next'
import axios from 'axios';
import isbot from 'isbot';

function PlaceHolder({data, userAgent}){

    const renderPlaceHolders = data.map(p => <li key={p.id}>{p.title}</li>)
    var isBot = isbot(userAgent);
    // useEffect(() => {
    //    isBot = isbot(navigator.userAgent);
    // }, [])
   console.log(userAgent);
    console.log(isBot);
    return (
       <>
          <Head>
        <title>The Rock (1996)</title>
        {!isBot?
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
            <ul>
                {renderPlaceHolders}
            </ul>
        </div>
       </>
 
    )
}

// PlaceHolder.getInitialProps = async ({}) =>{
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     return {
//         placeHolders:res.data
//     }
// }


export async function getServerSideProps({req} ) {
    const userAgent = req.headers['user-agent']
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data,
        userAgent: userAgent
    } }
  }
  
  
export default PlaceHolder;