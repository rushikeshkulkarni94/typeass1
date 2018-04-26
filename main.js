var youtube = /** @class */ (function () {
    //constructor definition
    function youtube(vtitle, views, likes, dislikes, vurl, vduration, channelname, publishdate, recommend) {
        var _this = this;
        //Method Implementation
        this.getRelatedVideos = function () {
            console.log("Printing Related Videos");
        };
        this.getNumberofViews = function () {
            return _this.views;
        };
        this.getNumberofLikes = function () {
            return _this.likes;
        };
        this.getNumberofDisLikes = function () {
            return _this.dislikes;
        };
        this.getVideoUrl = function () {
            return _this.vurl;
        };
        this.getVideoDuration = function () {
            return _this.vduration;
        };
        this.getOwnerName = function () {
            return _this.channelname;
        };
        this.getRecommend = function () {
            if (_this.recommend = true) {
                console.log("Recommended for you");
            }
            else {
                console.log(" ");
            }
        };
        this.vtitle = vtitle;
        this.views = views;
        this.likes = likes;
        this.vurl = vurl;
        this.recommend = recommend;
        this.channelname = channelname;
        this.dislikes = dislikes;
        this.vduration = vduration;
        this.publishdate = publishdate;
    }
    return youtube;
}()); //end of class
//Object creation 
var obj1 = new youtube("First Video", 2000, 100, 10, "https:youtube.com/fistvideo", "2 days ago", "Edwisor", "26-Apr-2018", true);
//Storing Result in variable
obj1.getRelatedVideos();
obj1.getRecommend();
var ow = obj1.getOwnerName();
var dur = obj1.getVideoDuration();
var ur = obj1.getVideoUrl();
var dis = obj1.getNumberofDisLikes();
var lik = obj1.getNumberofLikes();
var num = obj1.getNumberofViews();
//Printing Result
console.log("Ownername=" + ow);
console.log("Duration=" + dur);
console.log("URL=" + ur);
console.log("Dislike=" + dis);
console.log("Likes=" + lik);
console.log("No of views=" + num);
