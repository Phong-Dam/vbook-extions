load('config.js');
function execute(url) {
    const regex = /(?:book_id=|\/)(\d+)$/;
    let book_id = url.match(regex)[1]

    // let book_id = url.split("book_id=")[1]
    let response = fetch("https://api5-normal-sinfonlineb.fqnovel.com/reading/bookapi/multi-detail/v/?aid=2329&iid=1&version_code=999&book_id=" + book_id)
    if (response.ok) {
            let json = response.json();
            let book_info = json.data[0];
            let a_gen=JSON.parse(book_info.category_v2);

            let genres = [];
            a_gen.forEach(e => {
                genres.push({
                    title: e.Name,
                    input: "&category_id=" + e.ObjectId + "&gender=1",
                    script: "gen3.js"
                })
            });
            let last_publish_time = book_info.last_publish_time
            let last_publish_time_string = formatChineseDate(last_publish_time)
            let serial_count = book_info.serial_count
            let last_chapter_title = book_info.last_chapter_title
            let read_count = book_info.read_count
            let word_number = book_info.word_number
            let score = book_info.score
            let ongoing = (book_info.creation_status == '1') ? true : false
            return Response.success({
                name: book_info.book_name,
                cover: book_info.expand_thumb_url,
                author: book_info.author,
                description: book_info.abstract.replace(/\n/g, "<br>"),
                genres: genres,
                detail: 
                `Truyện : ${book_info.book_name}<br>
                Tên khác : ${book_info.book_flight_alias_name}<br>
                Tag : ${book_info.tags}<br>
                ID : ${book_info.book_id}<br>
                Tác giả : ${book_info.author}<br>
                Điểm : ${score}分<br>Số chương : ${serial_count}<br>
                Số lượng từ : ${word_number}<br>
                Số lượt xem : ${read_count}<br>
                Cập nhật lần cuối : ${last_publish_time_string}<br>
                Chương đầu : ${book_info.first_chapter_title}<br>
                Chương mới nhất : ${last_chapter_title}`,
                ongoing: ongoing
            });

    }
    return null;
}
function formatChineseDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}