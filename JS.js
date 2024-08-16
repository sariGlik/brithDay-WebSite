/* פונקצית סטרינג */
var c=0;
let y;
var b=" Here you can organize a perfect birthday for any age and in any style down to the last detail...happy brithday!!!happy brithday!!!happy brithday!!happy brithday!!";
let v=document.getElementById("h11");
y=setInterval(tostart,300);//שולח לפונקציה tostring 300 פעמים
/*פונקציה חותכת את הכותרת STRING*/ 
function tostart(){
document.getElementById("h11").innerHTML=b.substring(c,b.length)+" "+b.substring(0,c);
c++;
if(c>b.length){
        c=0;
}
}
//מערך מוצרים
const product=[{
  //אוכל
  //מנות ילדים
  "id":"1",
  "name":"ציפס",
  "price":"15",
  "img":"./picture/food/ציפס.png",
  "category":["אוכל"]
},
{
  "id":"2",
  "name":"פיצה",
  "price":"50",
  "img":"./picture/food/פיצה.png",
  "category":["אוכל"]
},
{
  "id":"3",
  "name":"לחמניה ונקניק",
  "price":"15",
  "img":"./picture/food/באגט נקניק.png",
  "category":["אוכל"]
},
{
  "id":"4",
  "name":"פלאפל",
  "price":"25",
  "img":"./picture/food/פלאפאל.png",
  "category":["אוכל"]
},
{
  "id":"5",
  "name":"שניצלונים",
  "price":"30",
  "img":"./picture/food/שניצלונים.png",
  "category":["אוכל"]
},
{//חלבי
  "id":"6",
  "name":"פוקצה",
  "price":"45",
  "img":"./picture/food/פוקצה.png",
  "category":["אוכל","חלבי"]
},
{
"id":"8",
"name":"לזניה",
"price":"35",
"img":"./picture/food/לזניה.png",
"category":["אוכל","חלבי"]
},
{
"id":"9",
"name":"מרק",
"price":"18",
"img":"./picture/food/מרק.png" ,
"category":["אוכל","חלבי"]
},
//סלטים
{
"id":"10",
"name":"סלט חלומי",
"price":"50",
"img":"./picture/food/סלט חלומי.png",
"category":["אוכל","חלבי"]
},
{
"id":"11",
"name":"סלט ירקות",
"price":"47",
"img":"./picture/food/סלט ירקות.png",
"category":["אוכל","סלטים"]
},
{
"id":"12",
"name":"סלט בולגרית",
"price":"35",
"img":"./picture/food/סלט בולגרית.png",
"category":["אוכל","סלטים"]
},
{
"id":"13" ,
"name":"./picture/food/דג סלמון.png",
"price":"50",
"img":"דג סלמון.png",
"category":["אוכל","חלבי"]
},
{
"id":"14",
"name":"דג פורול",
"price":"50",
"img":"./picture/food/דג פורל.png" ,
"category":["אוכל","חלבי"]
},
//בשרי
{
"id":"15",
"name":"באגט שוארמה",
"price":"55",
"img":"./picture/food/באגט שווארמה.png",
"category":["אוכל","בשרי"]
},
{
"id":"16",
"name":"פרגיות",
"price":"69",
"img":"./picture/food/פרגיות.png" ,
"category":["אוכל","בשרי"]
},
{
"id":"17",
"name":"סלט חזות",
"price":"45",
"img":"./picture/food/סלט חזות.png",
"category":["אוכל","בשרי"]
},
{
"id":"18",
"name":"סלט חסה",
"price":"49",
"img":"./picture/food/סלט חסה.png" ,
"category":["אוכל","בשרי"]
},
{
"id":"19",
"name":"סלט שורשים",
"price":"45",
"img":"./picture/food/סלט שורשים.png" ,
"category":["אוכל","בשרי"]
},
{
"id":"20",
"name":"חזות מוקפץ",
"price":"53",
"img":"./picture/food/חזות מוקפץ.png",
"category":["אוכל","בשרי"]
},
//קינוחים
{
"id":"21",
"name":"קרפ צרפתי",
"price":"40",
"img":" ./picture/food/קרפ צרפתי.jpeg",
"category":["אוכל","קינוחים"]
},
{
"id":"22",
"name":"ופל בלגי",
"price":"35",
"img":"./picture/food/וופל בלגי.jpg",
"category":["אוכל","קינוחים"]
},
{
"id":"23",
"name":"גלידה",
"price":"22",
"img":"./picture/food/גלידה.jpg",
"category":["אוכל","קינוחים"]
},
//בלונים
{
"id":"24",
"name":"עיצוב כניסה-תכלת",
"price":"350",
"img":"./picture/Bloon/כניסה תכלת.png",
"category":["בלונים"]
},
{
"id":"25",
"name":"עיצוב כניסה-ירוק",
"price":"350",
"img": "./picture/Bloon/כניסה ירוק.png",
"category":["בלונים"]
},
{
"id":"26",
"name":"עיצוב בלונים-ירוק",
"price":"320",
"img":"./picture/Bloon/בלון ירוק.png",
"category":["בלונים"]
},
{
"id":"27",
"name":"עיצוב בלונים-כחול",
"price":"320",
"img":"./picture/Bloon/בלון כחול.png" ,
"category":["בלונים"]
},
{
"id":"28",
"name":"עיצוב בלונים-baby",
"price":"320",
"img":"./picture/Bloon/בלון ירוק.png" ,
"category":["בלונים"]
},
{
"id":"29",
"name":"זר מנצנצים",
"price":"30",
"img":"./picture/bloon/בלון1.png" ,
"category":["בלונים","זר"]
},
{
"id":"30",
"name":"זר ורוד",
"price":"35",
"img":"./picture/bloon/בלון2.png" ,
"category":["בלונים","זר"]
},
{
"id":"31",
"name":"זר בלונים מוזהב",
"price":"50",
"img":"./picture/bloon/בלון3.png" ,
"category":["בלונים","זר"]
},
{
"id":"32",
"name":"זר בלונים גלידה",
"price":"30",
"img":"./picture/bloon/בלון4.png" ,
"category":["בלונים","זר"]
},
{
"id":"33",
"name":"זר בלונים לב-",
"price":"30",
"img":"./picture/bloon/בלון5.png" ,
"category":["בלונים","זר"]
},
{
"id":"34",
"name":"זר בלונים שחור-זהב",
"price":"30",
"img":"./picture/bloon/בלון6.png",
"category":["בלונים","זר"]
},
{
"id":"35",
"name":"זר בלונים כחול",
"price":"30",
"img":"./picture/bloon/בלון7.png",
"category":["בלונים","זר"]
},
{
"id":"36",
"name":"זר בלונים-אדום",
"price":"30",
"img":"./picture/bloon/בלון8.png",
"category":["בלונים","זר"]
},
{
"id":"37",
"name":"זר בלונים פשוט",
"price":"30",
"img":"./picture/bloon/בלון9.png",
"category":["בלונים","זר"]
},
{
"id":"38",
"name":"זר בלונים צבעוני",
"price":"30",
"img":"./picture/bloon/בלון10.png",
"category":["בלונים","זר"]
},
{
"id":"39",
"name":"זר בלונים גלידות",
"price":"45",
"img":"./picture/bloon/בלון11.png",
"category":["בלונים","זר"]
},
{
"id":"40",
"name":"זר בלונים פרות",
"price":"30",
"img":"./picture/bloon/בלון12.png",
"category":["בלונים","זר"]
},
{
"id":"41",
"name":"זר בלונים פלמינגו",
"price":"30",
"img":"./picture/bloon/בלון13.png",
"category":["בלונים","זר"]
},
{
"id":"42",
"name":"זר בלונים מנומר",
"price":"30",
"img":"./picture/bloon/בלון14.png",
"category":["בלונים","זר"]
},
{
"id":"43",
"name":"זר בלונים חדקרן",
"price":"30",
"img":"./picture/bloon/בלון15.png",
"category":["בלונים","זר"]
},
{
"id":"44",
"name":"זר בלונים כוכב-לב",
"price":"30",
"img":"./picture/bloon/בלון16.png",
"category":["בלונים","זר"]
},
{
"id":"45",
"name":"זר בלונים מטאלי",
"price":"30",
"img":"./picture/bloon/בלון16.png",
"category":["בלונים","זר"]
},

{
"id":"46",
"name":"זר בלונים זהב לבן",
"price":"30",
"img":"./picture/bloon/בלון19.png",
"category":["בלונים","זר"]
},
{
"id":"47",
"name":"",
"price":"60",
"img":"./picture/bloon/בלון מעוצב.png",
"category":["בלונים",]
},
{
"id":"48",
"name":"בלון מעוצב",
"price":"42",
"img":"./picture/bloon/בלון מעוצב1.png",
"category":["בלונים",]
},
{
"id":"49",
"name":"בלון מעוצב2",
"price":"41",
"img":"./picture/bloon/בלון מעוצב2.png",
"category":["בלונים",]
},
{
"id":"50",
"name":"בלון מעוצב 1",
"price":"38",
"img":"./picture/Bloon/בלון מעוצב1.png",
"category":["בלונים",]
},
{
"id":"51",
"name":"בלון מספר",
"price":"20",
"img":"./picture/bloon/בלון במספר1.png",
"category":["בלונים",]
},
{
"id":"52",
"name":"בלון עמוד",
"price":"80",
"img":"./picture/bloon/בלון עמוד.png",
"category":["בלונים",]
},
{
"id":"53",
"name":"בלון עמוד 1 ",
"price":"65",
"img":"./picture/bloon/בלון עמוד2.png",
"category":["בלונים",]
},
{
"id":"54",
"name":"בלון עמוד 2",
"price":"48",
"img":"./picture/bloon/בלון עמוד3.png",
"category":["בלונים",]
},
{
"id":"55",
"name":"בלון בקופסא",
"price":"68",
"img":"./picture/Bloon/בלון בקופסא.png",
"category":["בלונים",]
},
{
"id":"56",
"name":"בלון בעיגול",
"price":"49",
"img":"./picture/bloon/בלון בעיגול.png",
"category":["בלונים",]
},
{
"id":"57",
"name":"בלון כתר",
"price":"78",
"img":"./picture/bloon/בלון כתר.png",
"category":["בלונים",]
},
{
"id":"58",
"name":"עוגה 1",
"price":"95",
"img":"./picture/food/עוגה1.jpg",
"category":["אוכל","עוגות"]
},
{
  "id":"59",
  "name":"עוגה 2",
  "price":"85",
  "img":"./picture/food/עוגה2.jpg",
  "category":["אוכל","עוגות"]
  },
  {
    "id":"60",
    "name":"עוגה 3",
    "price":"78",
    "img":"./picture/food/עוגה3.jpg",
    "category":["אוכל","עוגות"]
    },
    {
      "id":"61",
      "name":"עוגה 4",
      "price":"69",
      "img":"./picture/food/עוגה4.jpg",
      "category":["אוכל","עוגות"]
      },
      {
        "id":"62",
        "name":"עוגה 5",
        "price":"87",
        "img":"./picture/food/עוגה5.jpg",
        "category":["אוכל","עוגות"]
        },
       {
       "id":"58",
       "name":"עריכה כחול",
      "price":"154",
      "img":"./picture/table/1.jpg",
      "category":["עיצובי שולחן",]
},
{
    "id":"59",
    "name":"עריכה מנטה",
    "price":"178",
    "img":"./picture/table/2.jpg",
    "category":["עיצובי שולחן",]
},
{
  "id":"60",
  "name":"",
  "price":"",
  "img":"./picture/table/4.jpg",
  "category":["עיצובי שולחן"]
  },
  {
    "id":"61",
    "name":"",
    "price":"",
    "img":"./picture/table/5.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"62",
    "name":"",
    "price":"",
    "img":"./picture/table/7.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"63",
    "name":"",
    "price":"",
    "img":"./picture/table/8.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"64",
    "name":"",
    "price":"",
    "img":"./picture/table/9.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"65",
    "name":"",
    "price":"",
    "img":"./picture/table/10.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"66",
    "name":"",
    "price":"",
    "img":"./picture/table/11.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"67",
    "name":"",
    "price":"",
    "img":"./picture/table/12.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"68",
    "name":"",
    "price":"",
    "img":"./picture/table/13.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"69",
    "name":"",
    "price":"",
    "img":"./picture/table/14.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"70",
    "name":"",
    "price":"",
    "img":"./picture/table/15.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"71",
    "name":"",
    "price":"",
    "img":"./picture/table/16.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"72",
    "name":"",
    "price":"",
    "img":"./picture/table/17.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"73",
    "name":"",
    "price":"",
    "img":"./picture/table/19.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"74",
    "name":"",
    "price":"",
    "img":"./picture/table/20.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"75",
    "name":"",
    "price":"",
    "img":"./picture/table/21.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"76",
    "name":"",
    "price":"",
    "img":"./picture/table/22.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"77",
    "name":"",
    "price":"",
    "img":"./picture/table/23.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"78",
    "name":"",
    "price":"",
    "img":"./picture/table/24.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"79",
    "name":"",
    "price":"",
    "img":"./picture/table/25.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"80",
    "name":"",
    "price":"",
    "img":"./picture/table/26.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"81",
    "name":"",
    "price":"",
    "img":"./picture/table/27.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"82",
    "name":"",
    "price":"",
    "img":"./picture/table/29.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"83",
    "name":"",
    "price":"",
    "img":"./picture/table/30.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"84",
    "name":"",
    "price":"",
    "img":"./picture/table/31.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"85",
    "name":"",
    "price":"",
    "img":"./picture/table/32.jpg",
    "category":["עיצובי שולחן"]
  },
  {
    "id":"86",
    "name":"",
    "price":"",
    "img":"./picture/table/32.jpg",
    "category":["עיצובי שולחן"]
  }
]
function createhome(){
  // document.getElementsByClassName("overflow-y-auto").style.display="block"; 
  document.getElementById("img").style.display="block";
  document.getElementById("imag").style.display="block";
  document.getElementById("important").style.display="block";
  document.getElementById("main1").style.display="none";
  document.getElementById("main2").style.display="none";
  document.getElementById("main4").style.display="none";
}
//בלונים
function createdesigns(){
  document.getElementById("imag").style.display="none";
  document.getElementById("important").style.display="none";
  document.getElementById("cart").style.display="none";
  document.getElementById("img").style.display="none";
  document.getElementById("keep").style.display="none";
  document.getElementById("balon").innerHTML="";
  document.getElementById("main1").style.display="none";
  document.getElementById("main2").style.display="block";
  for(p of product){
    if(p.category[0]=="בלונים"){
      printy(p,2);
    }
  } 
 }
 //עיצובי שולחן
function createtable(){
  document.getElementById("imag").style.display="none";
  document.getElementById("important").style.display="none";
  document.getElementById("cart").style.display="none";
  document.getElementById("img").style.display="none";
  document.getElementById("keep").style.display="none";
  document.getElementById("food").innerHTML="";
  document.getElementById("main4").style.display="block";
  document.getElementById("main1").style.display="none";
   document.getElementById("main2").style.display="none";
for(p of product)
{
  if(p.category[0]=="עיצובי שולחן")
{
  printy(p,3);
}
}
 }
 //אוכל
function createfood()
{
  document.getElementById("imag").style.display="none";
  document.getElementById("important").style.display="none";
  document.getElementById("cart").style.display="none";
  document.getElementById("img").style.display="none";
  document.getElementById("keep").style.display="none";
  document.getElementById("food").innerHTML="";
  document.getElementById("main1").style.display="block";
   document.getElementById("main2").style.display="none";
   document.getElementById("main4").style.display="none";
for(p of product)
{
  if(p.category[0]=="אוכל")
{
  printy(p,1);
}
}
}
//הדפסת המוצרים
function printy(p,x)
{
       //יצירת דיב כללי
       const printProduct=document.createElement("div");
       printProduct.classList.add("printProduct"); 
        //די+
        const PlusDiv=document.createElement("div");
        PlusDiv.className="PlusDiv";
        PlusDiv.id="idplus";
        PlusDiv.innerHTML="➕";
        printProduct.appendChild(PlusDiv);
       //הדפסת תמונה
       const printImg = document.createElement("img");
       printImg .classList.add("printImg"); 
       printImg.src=p.img;
      printProduct.appendChild(printImg);
      
       //הדפסת שם
       let printName=document.createElement("div");
       printName.className="printName";
       printName.innerHTML=p.name+` / ₪${p.price} `;
       printProduct.appendChild(printName);
        //הדפסת מחיר
        // let printPrice=document.createElement("div");
        // printPrice.className="printPrice";
        // printPrice.innerHTML=`${p.price} ₪`;
        // printProduct.appendChild(printPrice);
       //הדפסת כפתור הוספה לסל
       const printBtn = document.createElement("button");
       printBtn.innerHTML = "הוסף לסל";
       printBtn.dataset.id = p.id;
        // printBtn.addEventListener("click",function(idplus,){changcolor(idplus)}); 
        printBtn.addEventListener("click",f=>{
          PlusDiv.style.backgroundColor="#5c8a8a";
        });
       printBtn.addEventListener("click",addToCart);
       printProduct.appendChild(printBtn);
       //הכנסת הדיב הכללי לתוך הכונטינר




       const str_data=localStorage.getItem("cart");
       let cart = [];//יחזיק לי את הנתונים שבסל
       if(str_data){
           //לפני שאני מפעילה JSON אני חייבת לבדוק שאין  לי NULL
           cart = JSON.parse(str_data);
       }
       // שליפת המקט של הכפתור שעליו לחצתי
       const current_id = p.id;
       // בדיקה האם המוצר כבר קיים בסל
       const in_cart = cart.find(obj => {//   חיפוש מחזיר אלמנט בודד
           return obj.id === current_id;//מחזיר את האלמנט הראשון שעונה לפרמטר החיפוש
       });
       if(in_cart){
        PlusDiv.style.backgroundColor="#5c8a8a";
       }
      
       switch(x){
        case 1:
          document.getElementById("food").appendChild(printProduct);
          break;
        case 2:
          document.getElementById("balon").appendChild(printProduct);
            break;
        case 4:
          document.getElementById("search").appendChild(printProduct);
            break;  
        case 3:
          document.getElementById("table").appendChild(printProduct);          
       } 
    
}
//הוספה לסל
function addToCart(){
 // קוראת את המוצרים שקיימים בלוקל
 const str_data=localStorage.getItem("cart");
 let cart = [];
 if(str_data){
     cart = JSON.parse(str_data);
 }
 // שליפת המקט של הכפתור שעליו לחצתי
 const current_id = this.dataset.id;
 // בדיקה האם המוצר כבר קיים בסל
 const in_cart = cart.find(obj => {
     return obj.id === current_id;
 });
 if(in_cart){// אם מצאתי מוצר בסל
     in_cart.qty += 1 //מוסיף כמות
 } else{// יוצר מוצר ומכניס למערך של הסל
     cart.push({
         id: current_id,
         qty: 1
     }); 
 }
 // נוסיף את המוצרים ללוקל
 const new_str = JSON.stringify(cart);
 localStorage.setItem("cart", new_str);
}
//תוכן הסל
function createorders(){
  document.getElementById("img").style.display="none";
//   // קודם כל - נשלוף את מה שיש לגולש בסל
  const data_str = localStorage.getItem("cart"); 
  if(!data_str){
      alert('אין נתונים להצגה');
      return;
  }
  // לשורה הזו אני מגיעה כשאני יודעת בוודאות שיש מוצרים בסל
  const all_cart = JSON.parse(data_str);
  my_cart(all_cart);
 }
//הסרה מהסל
function deleteCart(){

  //  if(str_data){
  //   //לפני שאני מפעילה JSON אני חייבת לבדוק שאין  לי NULL
  //   dcart = JSON.parse(str_data);
  //   }
  //   const dCheck = dcart.find(obj => {//   חיפוש מחזיר אלמנט בודד
  //     return obj.id === deleteId.id;//מחזיר את האלמנט הראשון שעונה לפרמטר החיפוש
  // });
  //   if(dCheck.qty>1){
  //     dCheck.qty-=1;
  //    //הדפסה של הורדה מהכמות
  // }  
  const str_data=localStorage.getItem("cart");
  let cart = [];//יחזיק לי את הנתונים שבסל
  if(str_data){
      //לפני שאני מפעילה JSON אני חייבת לבדוק שאין  לי NULL
      cart = JSON.parse(str_data);
  }
  // שליפת המקט של הכפתור שעליו לחצתי
  const current_id = this.dataset.id;
  // בדיקה האם המוצר כבר קיים בסל
}
//חיפוש
function Search(){
  let x=document.querySelector("#input").value;
  let flag=0;
  document.getElementById("img").style.display="none";
  document.getElementById("imag").style.display="none";
  document.getElementById("important").style.display="none";
  document.getElementById("cart").style.display="none";
  document.getElementById("img").style.display="none";
  document.getElementById("keep").style.display="none";
  document.getElementById("main1").style.display="none";
   document.getElementById("main2").style.display="none";
   document.getElementById("main4").style.display="none";
  document.getElementById("search").style.display="block";
        //  document.getElementById("balon").style.display="none";
   for(p of product){
      if((p.name).includes(x)||(p.category).includes(x)){
        printy(p,4);
          flag=1;
        // document.getElementById("food").style="block";
       }
    }
    if(flag==0){
      alert("אין מוצרים תואמים לחיפוש שלך!!!")
    }
}
  //הדפסת מוצרי החיפוש
  function prints(p){
       //יצירת דיב כללי
       const printProduct=document.createElement("div");
       printProduct.classList.add("printProduct"); 
       //הדפסת תמונה
       const printImg = document.createElement("img");
       printImg .classList.add("printImg"); 
       printImg.src=p.img;
       printProduct.appendChild(printImg);
       //הדפסת שם
       let printName=document.createElement("div");
       printName.className="printName";
       printName.innerHTML=p.name;
       printProduct.appendChild(printName);
        //הדפסת מחיר
        let printPrice=document.createElement("div");
        printPrice.className="printPrice";
        printPrice.innerHTML=`${p.price} ₪`;
        printProduct.appendChild(printPrice);
       //הדפסת כפתור הוספה לסל
       const printBtn = document.createElement("button");
       printBtn.innerHTML = "🛒";
       printBtn.dataset.id = p.id;
       printBtn.addEventListener("click", addToCart); 
       printProduct.appendChild(printBtn);
       //הכנסת הדיב הכללי לתוך הכונטינר
       document.getElementById("search").appendChild(printProduct);
}
const finalp = document.querySelector('.subtotal');
let my_bag = JSON.parse(localStorage.getItem('cart')) || [];
let removeAll = document.querySelector('.remove_all');
//מחיקת כל המוצרים בסל
removeAll.onclick = () => {
  finalPrice = 0;
  my_bag = [];
  localStorage.setItem('cart', JSON.stringify(my_bag));
  finalp.innerHTML=0;
  my_cart(my_bag);
}
//חזרה לעמוד הקודם
const previus=  document.querySelector('.previus');
previus.onclick=()=>{
history.back();
}
//הדפסת המוצרים של העגלה
const my_cart = (all_cart) => {
  let cartproduct=[];
  let finalPrice=0;
  document.getElementById("imag").style.display="none";
  document.getElementById("important").style.display="none";
  document.getElementById("main2").style.display="none";
  document.getElementById("main1").style.display="none";
  document.getElementById("table").style.display="none";
  document.getElementById("keep").style.display="none";
  document.getElementById("cart").style.display="block";
  document.getElementById("tbody").innerHTML="";
for(cartItem of all_cart){
    const products = product.find(obj => { 
          return obj.id === cartItem.id
        });
  const td_1= document.createElement('td');
  const td_2= document.createElement('td');
  td_2.classList.add("text-center","text-lg","text-medium");
  const input_num=document.createElement('input');
  input_num.type="number";
  input_num.min=1;
  input_num.value=1;
  input_num.style.width="220px";
  input_num.classList.add("mb-auto", "ml-auto" ,"mr-2");
  td_2.appendChild(input_num);
  const td_3= document.createElement('td');
  td_3.classList.add("text-center","text-lg","text-medium")
  const td_4= document.createElement('td');
  const tr=document.createElement('tr');
  tr.append(td_4, td_3, td_2, td_1);
  tbody.append(tr);
  td_4.classList.add("text-center");
  // tbody.append(td_1, td_2, td_3, td_4);
  finalPrice +=parseInt(products.price);
  const div_h4= document.createElement('div');
  div_h4.classList.add('product-info');
  const _h4= document.createElement('h5');
  _h4.style.fontFamily="height_font";
  _h4.innerHTML = products.name;
 _h4.classList.add('product-title');
  div_h4.append(_h4);
  const image = document.createElement('img');
  image.src=products.img;
  image.classList.add('img_prod');
  image.style.width="100px";
  const imag_name_div = document.createElement('div');
  imag_name_div.append(image);
  imag_name_div.append(div_h4);
  imag_name_div.classList.add("product_item","me-3");
  td_1.append(imag_name_div);
  const price_unit=document.createElement('p');
  price_unit.innerHTML=products.price;
  finalp.innerHTML= finalPrice;
  input_num.onchange=()=>{
     price_unit.innerHTML= (products.price*input_num.value);
    finalp.innerHTML= ((products.price*input_num.value)-parseInt(products.price)+ finalPrice);
  }
  let x=price_unit;
  td_3.append(price_unit);
        const remove = document.createElement('button');
        remove.innerHTML="✖️";
        remove.style.backgroundColor="white";
        remove.style.border="solid white"
        remove.classList.add("fa-solid","fs-2","p-3","image_button", "brown");
        td_4.append(remove);
        //כפתור של הסרה של מוצר בודד מהסל
    remove.onclick = () => {
      const s=localStorage.getItem("cart");
     let c=[];
     c = JSON.parse(s);
     let index=0;
      const x = c.find(obj => {//   חיפוש מחזיר אלמנט בודד
         index++;
        return obj.id ===products.id;//מחזיר את האלמנט הראשון שעונה לפרמטר החיפוש
      });
      all_cart.splice(index-1,1);
      localStorage.setItem('cart', JSON.stringify(all_cart));
      const data = localStorage.getItem("cart");
       cartproduct = JSON.parse(data);
      my_cart(cartproduct);
}
}
}
//דף תשלום
function next_step1(){
  document.getElementById("fieldset1").style.display="none";
  document.getElementById("fieldset2").style.display="block";
  document.getElementById("account").style.color="blue";
  document.getElementsByClassName("n").style.color="blue";
  }
   function next_step2()
   {
  document.getElementById("fieldset2").style.display="none";
  document.getElementById("fieldset3").style.display="block";
  document.getElementById("personal").style.color="blue";
  document.getElementsByClassName("n").style.color="blue";
  }
  function next_step3()
  {
  document.getElementById("fieldset3").style.display="none";
  document.getElementById("fieldset4").style.display="block";
  document.getElementById("payment").style.color="blue";
  document.getElementsByClassName("n").style.color="blue";
  }
//הרשמה
function Registre(){
  let name1=document.querySelector("#name").value;
  let password1=document.querySelector("#password").value;
  let login=[];
  let x=5;
  const r = localStorage.getItem("login"); 
  //במקרה והמערך של ההרשמה ריק
  if(r==null){
      login.push({// יוצר מוצר ומכניס למערך של הסל
      name: name1,
      password: password1
  });
  const new_login = JSON.stringify(login);
  localStorage.setItem("login", new_login);
  }
  //במקרה והמערך לא ריק
  else {
    login = JSON.parse(r);
     const templogin= login.find(obj => {
      return (obj.name === name1)&&(obj.password===password1);
  });
  //אם לא מצא אז מוסיף
  if(!templogin){
    login.push({
      name: name1,
      password: password1
  });
  const new_login = JSON.stringify(login);
  localStorage.setItem("login", new_login);
}
    //אם מצא
  else  if(templogin){
      alert(" הי,עכשיו אתה רשום במערכת ברוכה הבאה!!וברוך שובך....");
    }
  
  }
}
// Get the button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function openT() {
  document.getElementById("myNav").style.height = "100%";
}
function closeT() {
  document.getElementById("myNav").style.height = "0%";
}


