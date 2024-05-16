export const getAllSurveys = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/survey`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (token: string | null) => {
  try {
    if (!token) return;

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
