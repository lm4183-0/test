document.getElementById("debug").innerHTML = '';

var obj = new XMLHttpRequest();

obj.open('GET','https://raw.githubusercontent.com/lm4183-0/test/main/test.csv',true);
obj.onreadystatechange = function(){
	if (obj.readyState === 4 && obj.status === 200){
		var str = obj.responseText;
                var str2 = "";

                var items = str.split(" ");
                for (var i = 0; i < items.length; i++) {
                  str2 += items[i] + "|";
                }

		document.getElementById("debug").innerHTML = str2;
	}
};

obj.send(null);
