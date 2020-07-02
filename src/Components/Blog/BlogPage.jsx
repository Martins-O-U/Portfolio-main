import React, { useState, useEffect } from "react";
import { BlogInfo } from "./BlogInfo";
import styled from "styled-components";
import { Spinner } from "reactstrap";
import PaginationPage from "./Pagination";


export function BlogPage(props) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

    useEffect(() => {
        setData(BlogInfo);
    }, []);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return data.length === 0 ? (
        <StyledDivTemp>
            <Spinner color="primary" />
        </StyledDivTemp>
    ) : (
            <StyledDiv>
                <h1>Welcome to MOU's Blog</h1>
                <InfoDiv>
                    <div className="card-container">
                        <h2>Recent Blog Posts</h2>
                        {currentPosts.map(blog => (
                            <div key={blog.id} className="cards" onClick={() => props.history.push(`/singleblog/${blog.id}`)}>
                                <h3>{blog.title}</h3>
                                <p><span>{blog.para1}</span></p>
                            </div>
                        ))}
                        <PaginationPage postPerPage={postPerPage} totalPosts={data.length} paginate={paginate} />
                    </div>
                </InfoDiv>
            </StyledDiv>
        )
}


export default BlogPage;

const StyledDivTemp = styled.div`
    margin-top: 30%;
    text-align: center;
`;

const StyledDiv = styled.div`
    margin: 5% 1% 10% 1%;
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
    margin: 3% 1% 0.1% 1%;
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
    }

    .cards {
        border: 0;
        width: 92%;
        box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.24);
        padding: 1rem;
        cursor: pointer;
        position: relative;
        margin: 1rem auto;
        background-color: #FFFFF0;
        text-align: left;
    }
}
}
`;