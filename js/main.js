        
        function subNav(){//子导航悬浮
            var timer = null;//定义一个延时器
            window.onscroll =  function(){
                if(!timer){//函数节流
                    timer = setTimeout(function(){
                        console.log(1);
                        timer = null;
                    },2000)
                }//函数节流

                //子导航悬浮
                var scrollTop = document.documentElement.scrollTop;
                if(scrollTop>=616){
                    if(sub_nav.className == ""){
                        sub_nav.className = "active";
                        gifPic.style.display = "none";//隐藏子导航GIF图
                        backTopBox.style.display = "block";//显示回到顶部按钮
                    }
                }else{
                    if(sub_nav.className == "active"){
                        sub_nav.className = "";
                        gifPic.style.display = "block";//显示子导航gif图
                        backTopBox.style.display = "none";//隐藏回到顶部按钮
                    }               
                }          
            }
        }
        subNav();


        //回到顶部
        function timeTop(){
            var timer1 = null;
            backTop.onclick = function(){
                clearInterval(timer1)
                var timer1 = setInterval(function(){
                    if(document.documentElement.scrollTop <= 0){
                        document.documentElement.scrollTop = 0;
                        clearInterval(timer1);
                    }else{
                        document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
                    }
                },1)
            }
        }
        timeTop();

        var left_btn = document.getElementsByClassName("leftA")[0];
        var right_btn = document.getElementsByClassName("rightA")[0];
        console.log(right_btn);

        var aLi = document.getElementsByClassName("banner-img")[0].children;
        aLi = [].slice.call(aLi);
        //onsole.log(aLi);
        var iNow = 0;//当前显示的图片
        var zIndex = 1;
        var item_width = aLi[0].offsetWidth;//一个图片的宽度
        aLi.onclick = function(){
            if(iNow == index) return;
            iNow = index;
            banner_animate();
        }

        function banner_animate(){
            aLi[iNow].style.zIndex = ++zIndex;
            aLi[iNow].style.left = 0;
            move(aLi[iNow],300,"height");                       

        }
        right_btn.onclick = function(){
            if(iNow == aLi.length-1){
                iNow = 0;
            }else{
                iNow++
            }
            banner_animate();
        }
        left_btn.onclick = function(){
            if(iNow == 0){
                iNow == aLi.length-1;
            }else{
                iNow --;
            }
            banner_animate();
        }
        // right_btn.onclick = function(){
        //     //console.log(1);
        //     var hidden,show;
        //     hidden = index;
        //     if(index == aLi.length-1){
        //         index = 0;
        //         show = index;
        //     }else{
        //         index = index +1;
        //         show = index;
        //     }

        //     for(var i = 0;i<aLi.length;i++){
        //         aLi[i].style.zIndex = 0;
        //     }
            
        //     aLi[hidden].style.zIndex =1;
        //     aLi[show].style.zIndex = 2;

        //     aLi[show].style.height = 0;
        //     move(aLi[show],300,"height");
        // }

        // left_btn.onclick = function(){
        //     //console.log(1);
        //     var hidden,show;
        //     hidden = index;
        //     if(index == 0){
        //         index = aLi.length;
        //         show = index;
        //     }else{
        //         index = index -1;
        //         show = index;
        //     }

        //     // for(var i = aLi.length;i>0;i--){
        //     //     aLi[i].style.zIndex = 0;
        //     // }
            
        //     // aLi[hidden].style.zIndex =1;
        //     // aLi[show].style.zIndex = 2;

        //     // aLi[show].style.height = 0;
        //     // move(aLi[show],300,"height");
        // }

        var timer;
        clearInterval(timer);
        timer = setInterval(right_btn.onclick,2000);























