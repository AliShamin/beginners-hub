import React , {useEffect} from "react";
import { BlogSearchBar } from "../components/BlogSearchBar";
import { BlogList } from "../components/BlogList";
import { Footer } from "../components/Footer";
import "../core/styles/Blogs.css";

export default function Blogs() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="h10 d-flex-align-center">
                <BlogSearchBar />
            </div>
            <div className="d-flex-justify-center min-h-75">
                <BlogList />
            </div>
            <Footer />
        </>
    );
}

