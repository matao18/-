const data = require("./public/json/citylist.json");
const path = require("path");
module.exports = {
  devServer: {
    before(app) {
      app.get("/ajax/city", (req, res) => {
        res.json({ code: 200, message: "数据接收成功", data });
      });
    },
    proxy: {
      // 首页列表
      "/movieOnInfoList": {
        target: "http://m.maoyan.com",
        changeOrigin: true, // target是域名的话，需要这个参数
        // secure: false,   // 设置支持https协议的代理
        pathRewrite: {
          "/movieOnInfoList": "/ajax/movieOnInfoList"
        }
      },
      // 电影数据
      "/moreComingList": {
        target: "http://m.maoyan.com",
        changeOrigin: true,
        pathRewrite: {
          "/moreComingList": "/ajax/moreComingList"
        }
      },
      // 即将上映
      "/mostExpected": {
        target: "http://m.maoyan.com",
        changeOrigin: true,
        pathRewrite: {
          "/mostExpected": "/ajax/mostExpected"
        }
      },
      // 全城品牌信息
      "/ajax/filterCinemas": {
        target: "http://m.maoyan.com",
        changeOrigin: true
      },
      // 电影院信息
      "/ajax/cinemaList": {
        target: "http://m.maoyan.com",
        changeOrigin: true
      },
      // 该电影详细信息 movieId=xxxx
      "/ajax/detailmovie": {
        target: "http://m.maoyan.com",
        changeOrigin: true
      },
      // 电影院详细信息 cinemaId=xxx
      "/ajax/cinemaDetail": {
        target: "http://m.maoyan.com",
        changeOrigin: true
      },
      // 搜索电影 /ajax/search?kw=wu&cityId=117
      "/ajax/search": {
        target: "http://m.maoyan.com",
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "src/assets/scss/test.scss")]
    }
  }
};
