import React from 'react';
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
    .thumnail {
        margin-right: 1rem;
        img{
            display:block;
            width:160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
    display: flex;
        h2 {
            margin: 0;
            a{
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    &+& {
        margin-top: 3rem;
    }
`;

const UsPresenter = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url}>
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url}>
                        {title}
                    </a>
                </h2>
                <br />
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default UsPresenter;