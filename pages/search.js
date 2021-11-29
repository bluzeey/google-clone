import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY,CONTEXT_KEY} from '../keys'
function Search({results}) {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            <Header/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData=false;

    const data=await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
    ).then(response=>response.json());

    return{
        props:{
            results:data
        }
    }

}