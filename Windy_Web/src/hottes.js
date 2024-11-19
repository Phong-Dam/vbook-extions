load('config.js');
function execute(url, page) {
    if (!page) page = 0
    let newurl = `https://fanqienovel.com/api/author/library/book_list/v0/?page_count=18&page_index=${page}&gender=1&category_id=-1&creation_status=-1&word_count=-1&book_type=-1&sort=0`
    console.log(newurl)
    let response = fetch(newurl);

    if (response.ok) {
        let doc = response.json();
        let rows = doc.data.book_list
        const data = [];
        rows.forEach(e => {
            data.push({
                name: e.book_name,
                link: "https://fanqienovel.com" + "/page/" + e.book_id,
                cover: e.thumb_url,
                description: `${e.author}`,
                host: config_host
            })
        });
        let next = parseInt(page, 10) + 1
        return Response.success(dataz, next.toString());
    }
    return null;

}