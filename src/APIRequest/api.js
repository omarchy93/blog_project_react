import axios from "axios";

const baseURL = "https://basic-blog.teamrabbil.com/api";

export async function postCatagoris() {
  let res = await axios.get(baseURL + "/post-categories");
  if (res.status === 200) {
    return res.data.length > 0 ? res.data : [];
  } else {
    return [];
  }
}

export async function postNewestPost() {
  let res = await axios.get(baseURL + "/post-newest");
  if (res.status === 200) {
    return res.data.length > 0 ? res.data : [];
  } else {
    return [];
  }
}

export async function postByCaragory(id) {
  let res = await axios.get(baseURL + "/post-list/" + id);
  if (res.status === 200) {
    return res.data.length > 0 ? res.data : [];
  } else {
    return [];
  }
}

export async function postDetails(id) {
  let res = await axios.get(baseURL + "/post-details/" + id);
  if (res.status === 200) {
    return res.data !== null ? res.data : null;
  } else {
    return [];
  }
}
