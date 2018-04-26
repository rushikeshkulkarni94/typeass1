class youtube{
//Property declaration
  public vtitle:string;
public views:number;
public likes:number;
public dislikes:number;
public vurl:string;
public vduration:string;
public channelname:string;
public publishdate:string;
public recommend:boolean;
//constructor definition
constructor(vtitle:string,views:number,likes:number,dislikes:number,vurl:string,vduration:string,channelname:string,publishdate:string,recommend:boolean){
this.vtitle=vtitle;
this.views=views;
this.likes=likes;
this.vurl=vurl;
this.recommend=recommend;
this.channelname=channelname;
this.dislikes=dislikes;
this.vduration=vduration;
this.publishdate=publishdate;
}
//Method Implementation
     getRelatedVideos=()=>
     {
         console.log("Printing Related Videos");
     }
     getNumberofViews=()=>
     {
         return this.views;
     }
     getNumberofLikes=()=>
     {
        return this.likes;
     }
     getNumberofDisLikes=()=>
     {
        return this.dislikes;
     }
     getVideoUrl=()=>
     {
        return this.vurl;
     }
     getVideoDuration=()=>
     {
        return this.vduration;
     }
     getOwnerName=()=>
     {
        return this.channelname;
     }
     getRecommend=()=>
     {
         if(this.recommend=true)
        {
            console.log("Recommended for you");
        }
        else{
            console.log(" "); 
        }
     }
}//end of class
//Object creation 
let obj1=new youtube("First Video",2000,100,10,"https:youtube.com/fistvideo","2 days ago","Edwisor","26-Apr-2018",true);
//Storing Result in variable
obj1.getRelatedVideos();
obj1.getRecommend();
let ow=obj1.getOwnerName();
let dur=obj1.getVideoDuration();
let ur=obj1.getVideoUrl();
let dis=obj1.getNumberofDisLikes();
let lik=obj1.getNumberofLikes();
let num=obj1.getNumberofViews();

//Printing Result


console.log("Ownername="+ow);
console.log("Duration="+dur);
console.log("URL="+ur);
console.log("Dislike="+dis);
console.log("Likes="+lik);
console.log("No of views="+num);


