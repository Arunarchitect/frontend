import publicAxios from "../../components/publicAxios";

export const getBlog = async (id) => {
    const response = await publicAxios.get(`api/blogs/${id}`);

    return response.data;
}
