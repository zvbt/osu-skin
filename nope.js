function ieClicked() {

    if (document.all) {

        return false;

    }

}

function firefoxClicked(e) {

    if(document.layers||(document.getElementById&&!document.all)) {

        if (e.which==2||e.which==3) {

            return false;

        }

    }

}

if (document.layers){

    document.captureEvents(Event.MOUSEDOWN);

    document.onmousedown=firefoxClicked;

}else{

    document.onmouseup=firefoxClicked;

    document.oncontextmenu=ieClicked;

}

document.oncontextmenu=new Function("return false")

function disableselect(e){

    return false

    }

    function reEnable(){

    return true

    }

    document.onselectstart=new Function ("return false")

    if (window.sidebar){

    document.onmousedown=disableselect

    document.onclick=reEnable

    }



        document.onkeydown = function(e) {

                if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
                }
                return false;

        };
