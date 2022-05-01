// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'cloud1-8g213gzz7833476d'
})
const db = cloud.database();
const _ = db.command


// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const _id = event._id
    return await db.collection("blog_list").doc(_id).update({
        data:{
            likeNum:_.push([openid])
        }
    })
}