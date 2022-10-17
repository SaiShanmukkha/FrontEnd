import Image from "next/image";
import styles from "../styles/BlogPage.module.css"
import ReactMarkdown from 'react-markdown'


//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.text());

export default function BlogPostPage(){
    const { data, error } = useSWR("/api/staticdata", fetcher);
    if(error) return <div>{`error ${error}`}</div>

    return <ReactMarkdown children={data} />;
}

