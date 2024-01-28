import publicAxios from "../../components/publicAxios";

export const getBlogs = async() => {
    const response = await publicAxios.get('/api/blogs')
    return response.data;
}