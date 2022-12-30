<script type="text/javascript">

var obj = new XMLHttpRequest();
var str = "";

obj.open('GET','https://raw.githubusercontent.com/lm4183-0/test/main/test.csv',true);
obj.onreadystatechange = function(){
  if (obj.readyState === 4 && obj.status === 200){
    str = obj.responseText;
	}
};

obj.send(null);
