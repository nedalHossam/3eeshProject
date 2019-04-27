//////////////////////////menu changes function/////////////////
function chang(e) {
    document.getElementById("imgChooseActivity").setAttribute("src", "images/asset-13.png");
    document.getElementById("chooseActivity").style.color="#21cebe";
    document.getElementById("line1").style.backgroundColor="#2b2a2a";    
}
//////////////////////////////////////////////////////////
function changeImage1(event){
    document.getElementById("imgProfile").setAttribute("src", "images/asset-15.png");
    document.getElementById("chooseInfo").style.display="block";
    document.getElementById("chooseInfo").style.color="#21cebe";
    document.getElementById("line2").style.backgroundColor="#2b2a2a";   
}
//////////////////////////////////////////////////////////////
function changeImage2(event){
    document.getElementById("appointment").setAttribute("src", "images/appointmentColor.png");
    document.getElementById("dateAndSeats").style.display="block";
    document.getElementById("appointment").style.width="55%"
    document.getElementById("dateAndSeats").style.color="#21cebe";
    document.getElementById("line3").style.backgroundColor="#2b2a2a";   
}
//////////////////////////////////////////////////////////
function changeImage3(event){
    document.getElementById("tickets").setAttribute("src", "images/ticket.png");
    document.getElementById("price").style.display="block";
    document.getElementById("price").style.color="#21cebe";
    document.getElementById("line4").style.backgroundColor="#2b2a2a";   
}
//////////////////////////////////////////////////////////
function changeImage4(event){
    document.getElementById("promotion").setAttribute("src", "images/microPhone.png");
    document.getElementById("details").style.display="block";
    document.getElementById("details").style.color="#21cebe";   
}
////////////////////////////////////////////////////////////
function check1fun(event){
    document.getElementById("check1").style.color="#21cebe";
}
function check2fun(event){
    document.getElementById("check2").style.color="#21cebe";
}
function check3fun(event){
    document.getElementById("check3").style.color="#21cebe";
}
function check4fun(event){
    document.getElementById("check4").style.color="#21cebe";
}
function check5fun(event){
    document.getElementById("check5").style.color="#21cebe";
}
function check6fun(event){
    document.getElementById("check6").style.color="#21cebe";
}
function check7fun(event){
    document.getElementById("check7").style.color="#21cebe";
}
/////////////////////////datalink page////////////////////
$('.textWord_about').hide();
$('.link').click(function() {
    $('.textWord_about').hide();       
    $('.textWord_about[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
});
////////////////////////////////////////////////////////