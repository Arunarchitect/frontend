import publicAxios from "../../components/publicAxios";

export const getBlogs = async (tags, search) => {
  let queryString = tags.length ? `tagname=${tags.join(',')}` : "";
  if (search != "") {
    queryString += `${queryString ? "&" : ""}tagname=${search}`;
  }
  try {
    const response = await publicAxios.get(`api/blogs/?${queryString}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
