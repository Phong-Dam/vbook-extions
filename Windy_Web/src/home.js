function execute() {
    Response.error("Windy Hello");
    return Response.success([
            {title: "Đơn Nữ Chính",input: "&category_id=389&gender=1",script: "dnc1.js"},
            {title: "Đô Thị",input: "&category_id=1&gender=1",script: "gen3.js"},
            {title: "Đô Thị Não Động",input: "&category_id=262&gender=1",script: "gen3.js"},
            {title: "Hệ Thống",input: "&category_id=19&gender=1",script: "gen3.js"},
            {title: "Huyền Huyễn",input: "&category_id=7&gender=1",script: "gen3.js"},
    ]);
}