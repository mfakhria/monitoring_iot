export const getApiResponse = async (resource, query) => {
    try {
        const response = await fetch(`http://localhost:4000/${resource}?${query}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
};
