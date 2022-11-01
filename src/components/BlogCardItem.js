import React from "react";
import { Link } from 'react-router-dom';

export const BlogCardItem = (props) => {
    const path = `/blog/${props.blogDetail.path}`;
    return (
        <>
            <></>
            <Link to={path} style={{ textDecoration: 'none' }} >
                <div className="blog-item-container">
                    <div className="blog-item-box">
                        <div className="blog-item-box-header">
                            <h2>{props.blogDetail.title}</h2>
                        </div>
                        <div className="blog-item-box-footer">
                            <div className="d-flex"><span>Author :</span>&nbsp;<h4>{props.blogDetail.author}</h4></div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
