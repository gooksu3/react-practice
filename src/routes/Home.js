import { useState,useEffect } from "react";
import Movie from "../component/Movie"

function Home(){
    const [loading,setLoading]=useState(true)
    const [movies,setMovies]=useState([])
    // const getMovies=async()=>{
    //   const json=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
    //   setLoading(false)
    //   setMovies(json.data.movies);
    //   };
    // useEffect(()=>getMovies,[])
    // 밑에꺼 간단하게....근데 response가 안뜸...왜 그러지?
    useEffect(()=>{
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        .then((response)=>response.json())
        .then((json)=>{
        setMovies(json.data.movies);
        setLoading(false);
        });
    },[])
    console.log(movies)
    return <div>
        {loading ? <h1>Loading</h1>:
        movies.map((movie)=><Movie key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} id={movie.id}/>)
        }
    </div>
};

export default Home;