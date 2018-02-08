$(function () {
	// Аккордеон + изменение (+-)
    var $item = $('.sideBarItem');
    var flag = false;
    $item.click(function (e) {
        e.preventDefault();
        if (flag) {
            $(this).css("backgroundImage", 'url(img/plus.png)');
            flag = false;
        } else {
            $(this).css("backgroundImage", 'url(img/minus.png)');
            flag = true;
        }
        var $sub = $(this).siblings('.subSideBar');
        $sub.slideToggle();

    });
    /***************************************************************/
    // Позунок цены
    $(".sliderRange").slider({
        range: true,
        min: 70,
        max: 1000,
        values: [200, 600],
        slide: function (event, ui) {
            $("#amountMin").val(ui.values[0]);
            $("#amountMax").val(ui.values[1]);
        }
    });
    $("#amountMin").val($(".sliderRange").slider("values", 0));
    $("#amountMax").val($(".sliderRange").slider("values", 1));
    /***************************************************************/
    // Плавающее меню
    var mainNavLi = $(".mainNav li");
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 150) {
            $('.topHeader').css({
                position: "fixed",
                top: 0,
                height: "90px",
                borderBottom: "2px solid $accent",
                backgroundColor: "#eee"
            });
            mainNavLi.css("lineHeight", "90px");
            // определяем действие
        } else {
            $('.topHeader').css({
                position: "relative",
                top: "inherit",
                height: "130px",
                borderBottom: "none",
                backgroundColor: "#fff"
            });
            mainNavLi.css("lineHeight", "130px");
        }
    });
/***************************************************************/
// Обработка кликов кнопок
    var showNav = $('.showNav');
    var mainNav = $(".mainNav")
    showNav.click(function (e) {
        e.preventDefault();
        mainNav.slideToggle();
    });
    var btnClose = $('.close1');
    var btnClose2 = $('.close2');

    var modal = $('.cardSection');
    btnClose.click(function (e) {
        e.preventDefault();
        modal.hide(1000);

    });
    btnClose2.click(function (e) {
        e.preventDefault();
        ajaxSect.hide(1000);

    });
    var cartBtn = $(".cartBtn");
    cartBtn.click(function (e) {
        e.preventDefault();
        modal.show(1000)
    });
/***************************************************************/
// Скрытие модалки при клике вне окна
var popUp = $(".modal");
    $(document).mouseup(function (e){
		 
		if (!popUp.is(e.target) 
		    && popUp.has(e.target).length === 0) {  
			$(".modalSection").hide(1000); 
		}
	});
/***************************************************************/
// Сортировка по цене
var $productWrapper = $('.productsDiv');
var $product = $(".product")
    $("#sort").change(function () {
        var selectValue = $("select#sort option:selected").val();
        if (selectValue == 1) {
     
            $product.sort(function (a, b) {
                    return +a.dataset.price - +b.dataset.price;
                })
                .appendTo($productWrapper);
        } else if (selectValue == 2) {
            
            $product.sort(function (a, b) {
                    return -a.dataset.price - -b.dataset.price;
                })
                .appendTo($productWrapper);
        } else if (selectValue == 0) {
            location.reload();
        }
    });
/***************************************************************/
/* Валидация формы (каждое поле проверяется при потере фокуса, результат проверки каждого записывается в отдельную булевую  переменную, после чего если все переменные равны true, тоесть прошли проверку активируется submit)*/
    var numb1 = $('#numb1');
    var numb2 = $('#numb2');
    var numb3 = $('#numb3');
    var numb4 = $('#numb4');
    var cardHolder = $("#cardHolder");
    var cvv = $("#cvv");;
    var $validResult1 = false;
    var $validResult2 = false;
    var $validResult3 = false;
    var $validResult4 = false;
    var $validResult5 = false;
    var $validResult6 = false;
    var submit = $('.payBtn');
    submit.prop('disabled', true);
    function res() {
        if (($validResult1 && $validResult2 && $validResult3 && $validResult4 && $validResult5 && $validResult6) == true) {
            submit.prop('disabled', false);
        } else {
            submit.prop('disabled', true);
        }
    }
    res();
    var $validat1 = numb1.blur(function () {
        if ($(this).val() != '') {
            var pattern = /^[0-9]{4}$/;
            if (pattern.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $validResult1 = true;
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $validResult1 = false
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $validResult1 = false
        }
        res();
    });
    var $validat2 = numb2.blur(function () {
        if ($(this).val() != '') {
            var pattern = /^[0-9]{4}$/;
            if (pattern.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $validResult2 = true;
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $validResult2 = false
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $validResult2 = false
        }
        res();
    });
    var $validat3 = numb3.blur(function () {

        if ($(this).val() != '') {
            var pattern = /^[0-9]{4}$/;
            if (pattern.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $validResult3 = true;
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $validResult3 = false
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $validResult3 = false
        }
        res();
    });
    var $validat4 = numb4.blur(function () {
        if ($(this).val() != '') {
            var pattern = /^[0-9]{4}$/;
            if (pattern.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $validResult4 = true;
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $validResult4 = false
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $validResult4 = false
        }
        res();
    });
    var $validat5 = cardHolder.blur(function () {;
        if ($(this).val() != '') {
            var pattern = /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)/;
            if (pattern.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $validResult5 = true;
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $validResult5 = false
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $validResult5 = false
        }
        res();
    });
    var $validat6 = cvv.blur(function () {
        if ($(this).val() != '') {
            var pattern = /^[0-9]{3}$/;
            if (pattern.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $validResult6 = true;
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $validResult6 = false
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $validResult6 = false
        }
        res();
    });
 /***************************************************************/
 // Вытягивание текста AJAX
    var ajaxBtn = $(".headerBtn");
    var ajaxSect = $(".ajaxSection")
    ajaxBtn.click(function (e) {
        e.preventDefault();
        loadXMLDoc();
        ajaxSect.show(1000);
    });
    function loadXMLDoc() {
        var xmlhttp;
        if (XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else { 
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                $(".ajaxModal").append(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", "ajax.txt", true); 
        xmlhttp.send();
    }
/***************************************************************/
// Фильтрация с помощью слайдера цены
// $(".sliderRange, .ui-slider-handle").click(function() {
// var max = $("#amountMax").val();
// var min = $("#amountMin").val();
// var prodArray = $('.product');
// priceFilter();
// 	function priceFilter() {
// for (var i = 0; i < prodArray.length; i++) {
// 	var it = prodArray[i];
// 	var n = $.attr(it, 'data-price');
	
// 	if ((n > min) && (n < max)) {
// 		it.hide();
// 	}
// 	else{
// 		prodArray[i].css("display", "none");
// 	}
// 	}
	
// }
// });
 /***************************************************************/
 // Фильтр по категориям
 $(".subSideBar li").click(function(e) {
 	e.preventDefault();
 	console.log($(this).index());

 	switch ($(this).index()) {
  case 0:  
 	var filt = $product.filter('[data-type="blanket"]');
	$product.hide(600);
    break;
   case 1:  
 	var filt = $product.filter('[data-type="cover"]');
	$product.hide(600);
    break;
  case 2:  
 	var filt = $product.filter('[data-type="gobelen"]');
	$product.hide(600);
    break;

  case 4:
   var filt = $product;
    break;
}

filt.show(600);
 });
});