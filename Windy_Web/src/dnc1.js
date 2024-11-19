load('config.js');
function execute(url, page) {
    page = Math.floor(Math.random() * 2000) + 1;
    let newurl = `https://novel.snssdk.com/api/novel/channel/homepage/new_category/book_list/v1/?parent_enterfrom=novel_channel_category.tab.&aid=1967&offset=${page}&limit=100&category_id=389&gender=1`
    console.log(newurl)
    let response = fetch(newurl);

    if (response.ok) {
        let doc = response.json();
        let rows = doc.data.data
        const data = [];
        rows.forEach(e => {
            if ((e.serial_count>150)){
                let newdes = e.book_flight_alias_name !== undefined ? `${e.serial_count} - ${e.book_flight_alias_name}` : `${e.serial_count}`;
                data.push({
                name: e.book_name,
                link: config_host + "/page/" + e.book_id,
                cover: "https://p3-novel.byteimg.com/" + e.thumb_uri +"~tplv-resize:225:0.image",
                description: newdes,
                host: config_host
            })
            }
        });
        let next = parseInt(page, 10) + 1
        return Response.success(data, next.toString());
    }
    return null;

}