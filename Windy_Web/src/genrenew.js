function execute() {
    return Response.success([
        {title: "Cập nhật",input: "",script: "newest.js"},
        {title: "Nóng",input: "",script: "hottes.js"},
        {title: "Đơn nữ chính",input: "&category_id=389",script: "GenNew.js"},
        {title: "Đơn nữ chính",input: "&category_id=389",script: "GenHot.js"},
        {title: "Đô Thị",input: "&category_id=1",script: "GenNew.js"},
        {title: "Đô Thị",input: "&category_id=1",script: "GenHot.js"},
        {title: "Huyền Huyễn",input: "&category_id=7",script: "GenNew.js"},
        {title: "Huyền Huyễn",input: "&category_id=7",script: "GenHot.js"},
        {title: "Đô Thị Não Động",input: "&category_id=262",script: "GenNew.js"},
        {title: "Đô Thị Não Động",input: "&category_id=262",script: "GenHot.js"},
        {title: "Hệ Thống",input: "&category_id=19",script: "GenNew.js"},
        {title: "Hệ Thống",input: "&category_id=19",script: "GenHot.js"},
    ]);
}