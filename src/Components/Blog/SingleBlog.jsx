import React from "react";
import { BlogInfo } from "./BlogInfo";
import styled from "styled-components";
import { Spinner } from "reactstrap";


export function SingleBlogPage(props) {
    const proppId = props.match.params.id;
    let calledBlog = [];

    BlogInfo.map(blogs => {
        if (Number(proppId) === blogs.id) {
            calledBlog.push(blogs);
        }
        return calledBlog;
    });


    return calledBlog.length === 0 ? (
        <StyledDivTemp>
            <Spinner color="primary" />
        </StyledDivTemp>
    ) : (
            <StyledDiv>
                <h1>Welcome to MOU's Blog</h1>
                <InfoDiv>
                    <div className="card-container">
                        {calledBlog.map(blog => (
                            <div key={blog.id}>
                                <h2>{blog.title}</h2>
                                <div className="cards">
                                    <p><span>{blog.para1}</span></p>
                                    <p><span>{blog.para2}</span></p>
                                    <p><span>{blog.para3}</span></p>
                                    <p><span>{blog.para4}</span></p>
                                    <p><span>{blog.para5}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfoDiv>
            </StyledDiv>
        )
}


export default SingleBlogPage;

const StyledDivTemp = styled.div`
    margin-top: 30%;
    text-align: center;
`;

const StyledDiv = styled.div`
    margin: 5% 1%;
    h1{
        text-align: center;
        @media only screen and (max-width:1000px){
            margin-top: 7%;
        }
        @media only screen and (max-width:775px){
            margin-top: 8%;
        }

        @media only screen and (max-width:620px){
            margin-top: 10%;
        }
        @media only screen and (max-width:520px){
            margin-top: 12%;
        }

        @media only screen and (max-width:480px){
            margin-top: 7%;
        }
    }
`;

const InfoDiv = styled.div`
display: flex;
justify-content: space-between;

@media only screen and (max-width: 649px){
    display: flex;
    flex-direction: column;
}

.card-container{
    margin: 0.1% 1% 2% 1%;
    width: 97%;
    padding-bottom: 50px;
    padding-top: 20px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
    background-color: #F5F5F5;

    @media only screen and (max-width: 649px){
        width: 97%;
    }

    h2{
        text-align: center;
        font-size: 28px;
        margin-top: 5px;
    }

    .cards {
        border: 0;
        width: 92%;
        box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.24);
        padding: 1rem;
        position: relative;
        margin: 1rem auto;
        background-color: #FFFFF0;
        text-align: left;
    }
}
}
`;