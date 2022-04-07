// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'cloud1-8g213gzz7833476d'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    const openid = cloud.getWXContext().OPENID
    var size = event.size ? event.size : 0 ;
    return await db.collection("blog_list").orderBy("posttime","desc").limit(4).skip(size).get();
    
}