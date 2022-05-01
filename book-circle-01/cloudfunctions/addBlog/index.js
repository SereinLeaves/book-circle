// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'cloud1-8g213gzz7833476d'
})

const db=cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const openid = cloud.getWXContext().OPENID;
    var {blogObj} = event;
    blogObj.openid = openid;
    blogObj.posttime = Date.now();
    // blogObj.bookName = bookName;
    // blogObj.like=""
    console.log(event);
    return await db.collection("blog_list").add({
        data:blogObj
    })

}