var nombreFichero = ["data/1.json", "data/2.json", "data/3.json"];
var ficheroCargado = 0;

$(document).ready(function () {//al cargar la web

    $("html, body").animate({scrollTop: 0});
    //button cargar news
    $("#btnLoad").click(function () {
        cargarNoticias();
    });

    //cargar news con scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            cargarNoticias();
        }
        
        
        if ($(window).scrollTop() > ($('#jumboTron').outerHeight())) {
            $('#navbarfixed').addClass('affix');
        }
        if ($(window).scrollTop() < ($('#jumboTron').outerHeight())) {
            $('#navbarfixed').removeClass('affix');
        }
    });
});

function cargarNoticias() {
    if ((ficheroCargado < nombreFichero.length) && (cargarFichero(nombreFichero[ficheroCargado]))) {
        ficheroCargado++;
    } else {
        $("#btnLoad").html("No hay más noticias");
    }
}

function cargarFichero(nombreFichero) {
    var path = nombreFichero;

    //cargar Noticias
    $.getJSON(path, function (jsonObject) {
        addNoticia(jsonObject, nombreFichero);
    });
    return true;
}

function addNoticia(json, nombreFichero) {
    var i = document.getElementById("cargarNoticias");
    var fila = document.createElement("div");
    fila.id = "row" + nombreFichero;
    fila.className = "row";
    i.appendChild(fila);


    //for (i = 0; i < nombreFichero.length; i++) {
    $.each(json, function (i, x) {
        var columna = document.createElement("div");
        columna.className = "col col-sm-6";
        var a = document.createElement("a");
        a.setAttribute('href', "#");
        var h3 = document.createElement("h3");
        h3.className = "notTitle";
        h3.textContent = json[i].title;
        var h5 = document.createElement("h5");
        h5.className = "date";
        h5.textContent = json[i].date;
        var divN = document.createElement("div");
        divN.className = "not img-rounded";
        var img = document.createElement("img");
        if ($(window).width() < 900) {
            img.src = json[i].imgmid;
        } else {
            img.src = json[i].imgbig;
        }
        img.alt = "image New";
        var des = document.createElement("p");
        des.className = "desc";
        des.textContent = json[i].desc;

        divN.appendChild(img);
        a.appendChild(h3);
        a.appendChild(divN);
        a.appendChild(des);
        a.appendChild(h5);
        columna.appendChild(a);
        fila.appendChild(columna);

    })
}
