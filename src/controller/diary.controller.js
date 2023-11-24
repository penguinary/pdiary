const diaryService = require("../service/diary.service");

//post_diary_controller
async function postDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const postDiary_req = req.body;
    console.log("데이터 들어오는거 확인", postDiary_req);
    const postDiary_data = await diaryService.postDiary(postDiary_req);
    return res.status(postDiary_data.Status).json(postDiary_data);
}
async function getDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const getDiary_req = req.body;
    console.log("데이터 들어오는거 확인", getDiary_req);
    const getDiary_data = await diaryService.postDiary(getDiary_req);
    return res.status(getDiary_data.Status).json(getDiary_data);
}

async function putDiary(req, res, next) {
    console.log("컨트롤러 들어옴");
    const putDiary_req = req.body;
    console.log("데이터 들어오는거 확인", putDiary_req);
    const putDiary_data = await diaryService.putDiary(putDiary_req);
    return res.status(putDiary_data.Status).json(putDiary_data);
}

module.exports = {
    postDiary,
    putDiary,
    getDiary
}