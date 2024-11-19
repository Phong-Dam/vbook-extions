load('config.js');
function execute(url, page) {
    page = Math.floor(Math.random() * 1000) + 1;
    let newurl = `https://novel.snssdk.com/api/novel/channel/homepage/new_category/book_list/v1/?parent_enterfrom=novel_channel_category.tab.&aid=1967&offset=${page}&limit=100${url}`
    console.log(newurl)
    let response = fetch(newurl);

    if (response.ok) {
        let doc = response.json();
        let rows = doc.data.data
        const data = [];
        rows.forEach(e => {
            if (e.score>0){
                data.push({
                name: e.book_name,
                link: config_host + "/page/" + e.book_id,
                cover: "https://p3-novel.byteimg.com/" + e.thumb_uri +"~tplv-resize:225:0.image",
                description: `Điểm : ${e.score} - Số Chương : ${e.serial_count} - Trang : ${page}`,
                host: config_host
            })
            }
        });
        let next = parseInt(page, 10) + 1
        return Response.success(data, next.toString());
    }
    return null;

}