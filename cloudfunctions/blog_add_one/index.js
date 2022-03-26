// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"env-3g1a160v0ad05b6f"
})
const db=cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const openid = cloud.getWXContext().OPENID
  var {blogObj}=event;
  blogObj.openid=openid; 
  blogObj.posttime=Date.now();
  

//   return await db.collection("blog_list").add({
//     data:blogObj
//   })
  return db.collection("blog_list").add({
    data:blogObj
  })
  
}