const mongoose=require('mongoose')

let ablumDao=require('../ablumDao');
const assert=require('assert')

describe("Test AlbumDao",function () {
    before(function () {
        mongoose.connect('mongodb://39.99.190.190/demo02',function (err) {

        })
    })
    after(function () {
        mongoose.disconnect()
    })

    it("Test AddAlbums",function (done) {
        let album ={
            album_id:1,
            album_name:"albumname",
            public_time:"public_time",
            week : 20,
            price: 34,
            cover: "http://localhost/a.jpg",
            singers: [
                {"singer_id":34,"singer_name":"Singer Name"}
            ]
        }
        ablumDao.addAlbum(album,function (aa) {
            console.log(aa)
            assert.ok(aa.album_id != null)
            done()
        })
    })



})