import { RightOutlined } from "@ant-design/icons"
import { Avatar, Button, List } from "antd"
import { MOVIES_IMGS_URL } from "config/moviesBaseLink"
import {  Result } from "interfaces/movies.interface"
import { Link } from "react-router-dom"

interface RenderMovieProps{
    movie: Result
}
const RenderMovie = ({movie:{id, title,poster_path}}:RenderMovieProps) => {
    const posterPath= `${MOVIES_IMGS_URL}${poster_path}`
    
  return (
    <List.Item>
<List.Item.Meta
avatar= {<Avatar src={posterPath}></Avatar>}
title={<Link to={`/movie/${id}`}>{title}</Link>}
/>
<Link to={`/movie/${id}`}>
    <Button type="primary" shape="circle" icon={<RightOutlined />}></Button>
</Link>
    </List.Item>
  )
}

export default RenderMovie