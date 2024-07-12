var tver_inner = '<div style="overflow:hidden; height:50vh; margin:25vh 0;"><iframe src="https://yandex.ru/map-widget/v1/?ll=35.889991%2C56.859623&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA1NzI3MRIY0KDQvtGB0YHQuNGPLCDQotCy0LXRgNGMIgoNb6sPQhVbb2NC&z=11" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>';
var t_inner ='<div style="overflow:hidden; height:50vh; margin:25vh 0;"><iframe src="https://yandex.ru/map-widget/v1/?ll=35.280680%2C56.993994&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA1NjgzNxI70KDQvtGB0YHQuNGPLCDQotCy0LXRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQotC-0YDQttC-0LoiCg0x1wtCFVUqZEI%2C&z=10.37" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>'
var V_inner ='<div style="overflow:hidden; height:50vh; margin:25vh 0;"><iframe src="https://yandex.ru/map-widget/v1/?ll=34.970200%2C57.094608&mode=poi&poi%5Bpoint%5D=34.966715%2C57.095601&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D122698457687&z=16.19" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>'
var volosovo_inner = '<div style="overflow:hidden; height:50vh; margin:25vh 0;"><iframe src="https://yandex.ru/map-widget/v1/org/usadba_stepanovskoye_volosovo/190432178870/?ll=35.362522%2C56.273735&z=16" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>'
var del_elem = document.getElementById('map');
var del_elem2= document.getElementById('map_t');
var del_elem1 = document.getElementById('x');
document.getElementById('tver1').addEventListener("click", function()
{
    del_elem.style.display = "block";
    del_elem1.style.display = "block";
    del_elem.innerHTML = tver_inner;

});
document.getElementById('T1').addEventListener("click", function()
{
    del_elem.style.display = "block";
    del_elem1.style.display = "block";
    del_elem.innerHTML = t_inner;

}
);
document.getElementById('V1').addEventListener("click", function()
{
    del_elem.style.display = "block";
    del_elem1.style.display = "block";
    del_elem.innerHTML = V_inner;

}
);
document.getElementById('volosovo1').addEventListener("click", function()
{
    del_elem.style.display = "block";
    del_elem1.style.display = "block";
    del_elem.innerHTML = volosovo_inner;

}
);
document.getElementById('map_i').addEventListener("click", function()
{
    del_elem2.style.display = "block";
    del_elem1.style.display = "block";

}
);
document.getElementById('x').addEventListener("click", function()
{
    del_elem.style.display = "none";
    del_elem1.style.display = "none";
    del_elem2.style.display="none";
    del_elem.innerHTML = "";
}
);
window.addEventListener("keyup", clear);
function clear(e)
{
    if(e.key=="Escape" & (del_elem.style.display == "block" || del_elem2.style.display == "block"))
    {
        del_elem1.style.display = "none";
        del_elem2.style.display = "none";
        del_elem.style.display = "none";
        del_elem.innerHTML = "";
    }
}