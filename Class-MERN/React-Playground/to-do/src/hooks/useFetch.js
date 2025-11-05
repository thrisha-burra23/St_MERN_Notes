import { useEffect, useState } from "react";

export function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);
    const [reload,setReload]=useState(false);

    async function fetchData() {
        try {
            setLoading(true);
            setError("");
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch")
            }
            const jsonData = await response.json();

            setData(jsonData);
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!url) return;
        fetchData();
    }, [url,reload])

    return { loading, error, data ,reload ,setReload}
}