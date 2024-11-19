load('config.js');
function execute(url, page) {
    if (!page) page = 0
    let newurl = `https://fanqienovel.com/api/author/library/book_list/v0/?page_count=18&page_index=${page}&gender=1&category_id=-1&creation_status=-1&word_count=-1&book_type=-1&sort=2`
    console.log(newurl)
    let response = fetch(newurl);

    if (response.ok) {
        let doc = response.json();
        let rows = doc.data.book_list
        const data = [];
        rows.forEach(e => {
            let response = fetch(`https://api5-normal-sinfonlineb.fqnovel.com/reading/bookapi/multi-detail/v/?aid=2329&iid=1&version_code=999&book_id=${e.book_id}`);
            if (response.ok) {
                let json = response.json();
                let book_info = json.data[0];
                console.log(book_info.book_name)
                data.push({
                name: book_info.book_name,
                link: config_host + "/page/" + e.book_id,
                cover: "https://p3-novel.byteimg.com/" + e.thumb_uri +"~tplv-resize:225:0.image",
                description: `${book_info.score_v3} - ${book_info.serial_count} - ${book_info.read_count}`,
                host: config_host
            })
            }
        }); 
        let next = parseInt(page, 10) + 1
        return Response.success(dataz, next.toString());
    }
    return null;

}