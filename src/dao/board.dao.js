const db = require('../config/db')

async function getBoard(req) {
    console.log(req.diary_id);
    return new Promise((resolve, reject) => {
        var queryData = `SELECT diary_id, diary_theme, diary_category, diary_title, user.user_nickname, diary_month, diary_day, diary_today, diary_weather, diary_content, diary_img
        FROM diary 
        JOIN user ON diary.user_id = user.user_id 
        ORDER BY diary_time DESC
        LIMIT 8 `;
        console.log(queryData);
        db.query(queryData, (error, db_data) => {
            if(error) {
                console.error(error)
                reject("DB ERR")
            }
            resolve(db_data)
        })
    })
}

module.exports = {
    getBoard
}