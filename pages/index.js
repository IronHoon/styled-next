
import Link from 'next/Link';
// import browserEnv from 'browser-env';

export default function Home({ results }) {

  // console.log(window.navigator);
  return (
    <div>
      <h1> Link to intro Page</h1>
      <div>
       <Link href='/intro'>
         <a>인트로 페이지 이동</a>
       </Link>
      </div>
      <div>
      <Link href='/contents'>
        <a>컨텐츠 페이지 이동</a>
      </Link>
      </div>
      <div>
      <Link href='/placeHolder'>
        <a>서버사이드렌더링</a>
      </Link>
      </div>
      
      
      
    </div>
  )
}

