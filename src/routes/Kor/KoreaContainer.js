import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import KoreaPresenter from "./KoreaPresenter";
import axios from 'axios';
import Section from "../../components/Section";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-top: 50px;
  width: 1000px;
  margin: auto;
  align-content: center;
  align-items: center;
    //box-sizing: border-box;
    //padding-bottom: 3rem;
    //width: 768px;
    //margin: 0 auto;
    //margin-top: 2rem;
    //@media screen and (max-width: 768px){
    //    width:100%;
    //    padding-left: 1rem;
    //    padding-right: 1rem;
    //}
`;

const KoreaContainer = () => {
    const [articles, setArticle] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=d424d6d114074feb80c770e97742831a');
                setArticle(response.data.articles);
                setLoading(false);
                console.log('Success Read');
            }
            catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []); // 첫 렌더링 후 한번만 호출. 비동기를 마치면 loading 값이 수정되어 화면 출력

    if(loading) {
        return <NewsListBlock>Loading....</NewsListBlock>
    } // 첫 화면 loading 화면 구성. 만약 api가 끝마치지 않으면 Loading.... 출력
    if(!articles) {
        console.log('articles is null');
        return null;
    } // 만약 articles가 정보를 담고 있지 않으면 null을 반환하여 화면에 아무것도 보이지 않는다. 이 부분이 있어야 Map으로 뿌려줄 수 있다.

    return (
        <Section title="korea_Headline_News">
            <NewsListBlock>
                {articles.map(article => (
                    <KoreaPresenter key={article.url} article={article} />
                ))}
            </NewsListBlock>
        </Section>
    )
}

export default KoreaContainer;