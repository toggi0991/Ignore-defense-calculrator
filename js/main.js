function x_y(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    if(x == 0 || y == 0){
        document.getElementById("result_1").value = "";
    }else{
        document.getElementById("result_1").value = Number(x)+(100-Number(x))*(Number(y)/100);
    }
}


function a_b(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    

    if(a == 0 || b == 0){
        document.getElementById("result_2").value = "";
    }else{
        var result = (1 - (Number(b) / 100) * (1 - ((Number(a)) / 100))) * 100;
        result = result * 100;
        result = Math.floor(Number(result));
        result = result / 100;

        document.getElementById("result_2").value = result + "%";
    }
}