const db = require('../config/db')
const logger = require('../config/logger')

async function getDiary(req) {
    console.log(req.diary_id);
    return new Promise((resolve, reject) => {
        var queryData = `SELECT diary_theme, diary_category, diary_title, user.user_nickname, diary_month, diary_day, diary_today, diary_weather, diary_content
            FROM diary 
            JOIN user ON diary.user_id = user.user_id 
            WHERE diary_id = ${req.diary_id}`;
        console.log(queryData);
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [diary]' +
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR")
            }
            resolve(db_data)
        })
    })
}

module.exports = {
    getDiary
}