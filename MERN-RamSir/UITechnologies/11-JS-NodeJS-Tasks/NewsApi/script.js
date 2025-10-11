
function getNews() {
    const apiKey = "pub_ca1f906232d54e86a2e4eb71ee5784b8";
    const topic = document.getElementById("topic").value.trim();
    const url = `https:newsdata.io/api/1/latest?apikey=${apiKey}&q=${topic}`;
    const news = document.getElementById("news");

    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Api Error", res.Status);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);

            const totalResults = data.totalResults;
            const total = document.createElement("p");
            total.className="total";
            total.innerHTML = `Total results related to your search:${totalResults}`;
            news.appendChild(total);
            const results = data.results;

            results.forEach(result => {
                const article = document.createElement("div");
                article.className = "article";
                article.innerHTML = `
                    <h3>${result.title}</h3>
                    <p> <strong>Creator:</strong>${result.creator}</p>
                    <p id="content"> ${result.content}</p>
                `;
                news.appendChild(article);
            });
        })
        .catch()

} 
